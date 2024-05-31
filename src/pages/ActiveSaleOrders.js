import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Box, Button, Table, Thead, Tbody, Tr, Th, Td, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure } from '@chakra-ui/react';
import { FaEllipsisH } from 'react-icons/fa';
import SaleOrderForm from '../forms/SaleOrderForm';
import { activeSaleOrders, customers } from '../mockData';

const fetchActiveSaleOrders = async () => {
    return activeSaleOrders;
};

const ActiveSaleOrders = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedOrder, setSelectedOrder] = useState(null);
    const queryClient = useQueryClient();

    const { data: saleOrders, isLoading } = useQuery({
        queryKey: 'activeSaleOrders',
        queryFn: fetchActiveSaleOrders
    });

    const formatDate = (date) => {
        const options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date(date));
        return formattedDate.replace(', ', ' (') + ')';
    };

    const createOrderMutation = useMutation({
        mutationFn: async (order) => {
            return order;
        },
        onSuccess: () => {
            queryClient.invalidateQueries('activeSaleOrders');
            queryClient.invalidateQueries('completedSaleOrders');
        }
    });

    const handleFormSubmit = async (order) => {
        try {
            if (selectedOrder) {
                const index = activeSaleOrders.findIndex(o => o.id === order.id);
                if (index !== -1) {
                    activeSaleOrders.splice(index, 1, order);
                }
            } else {
                createOrderMutation.mutate(order);
            }
            onClose();  // Close the modal after successful submission
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const getCustomerNameById = (customerId) => {
        const customer = customers.find(c => c.id === Number(customerId));
        return customer ? customer.name : 'Unknown';
    };

    const handleViewClick = (order) => {
        setSelectedOrder(order);
        onOpen();
    };

    const handleCreateOrderClick = () => {
        setSelectedOrder(null);
        onOpen();
    };

    if (isLoading) return 'Loading...';

    return (
        <Box>
            <Button onClick={handleCreateOrderClick}>Create Sale Order</Button>
            <Table mt={4}>
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Customer Name</Th>
                        <Th>Price (₹)</Th>
                        <Th>Last Modified</Th>
                        <Th>Edit/View</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {saleOrders.map(order => (
                        <Tr key={order.id}>
                            <Td>{saleOrders.indexOf(order) + 1}</Td>
                            <Td>{getCustomerNameById(order.customer_id)}</Td>
                            <Td>₹ {order.totprice}</Td>
                            <Td>{formatDate(order.invoice_date)}</Td>
                            <Td>
                                <IconButton icon={<FaEllipsisH />} onClick={() => handleViewClick(order)} />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{selectedOrder ? 'Edit' : 'Create'} Sale Order</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <SaleOrderForm initialData={selectedOrder || {}} onSubmit={handleFormSubmit} onClose={onClose} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default ActiveSaleOrders;
