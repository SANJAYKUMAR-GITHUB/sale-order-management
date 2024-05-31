import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Box, Table, Thead, Tbody, Tr, Th, Td, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure } from '@chakra-ui/react';
import { FaEllipsisH } from 'react-icons/fa';
import SaleOrderForm from '../forms/SaleOrderForm';
import { completedSaleOrders, customers } from '../mockData';

const fetchCompletedSaleOrders = async () => {
    return completedSaleOrders;
};

const formatDate = () => {
    const currentDate = new Date();
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);
    return formattedDate.replace(', ', ' (') + ')';
};


const CompletedSaleOrders = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedOrder, setSelectedOrder] = useState(null);

    const { data: saleOrders, isLoading } = useQuery({
        queryKey: 'completedSaleOrders',
        queryFn: fetchCompletedSaleOrders
    });

    const getCustomerNameById = (customerId) => {
        const customer = customers.find(c => c.id === Number(customerId));
        return customer ? customer.name : 'Unknown';
    };
    
    

    const handleViewClick = (order) => {
        setSelectedOrder(order);
        onOpen();
    };

    if (isLoading) return 'Loading...';

    return (
        <Box>
            <Table mt={4}>
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Customer Name</Th>
                        <Th>Price(₹)</Th>
                        <Th>Last Modified</Th>
                        <Th>View</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {saleOrders.map(order => (
                        <Tr key={order.id}>
                            <Td>{saleOrders.indexOf(order)+1}</Td>
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
                    <ModalHeader>View Sale Order</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <SaleOrderForm initialData={selectedOrder} readOnly />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default CompletedSaleOrders;


