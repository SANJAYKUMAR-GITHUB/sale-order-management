import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, FormControl, FormLabel, Input, NumberInput, NumberInputField, Select, Box, Flex } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { products, activeSaleOrders, completedSaleOrders } from '../mockData';
import { useNavigate } from 'react-router-dom';

const SaleOrderForm = ({ initialData, onSubmit, readOnly = false, onClose }) => {
    const { handleSubmit, register, setValue, watch, formState: { errors } } = useForm({ defaultValues: initialData });
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [sellingRates, setSellingRates] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (initialData && initialData.product) {
            setSelectedProduct(products.find(product => product.id === Number(initialData.product)));
        }
    }, [initialData]);

    const handleDateChange = (date) => {
        setValue('invoice_date', date);
    };

    const handleProductSelect = (productId) => {
        setSelectedProduct(products.find(product => product.id === Number(productId)));
    };

    const handleFormSubmit = async (data) => {
        try {
            let totprice = 0;
            selectedProduct.sku.forEach((sku, index) => {
                const quantity = parseInt(watch(`items[${index}].quantity`) || 0);
                const sellingRate = parseFloat(sellingRates[index] || 0);
                totprice += quantity * sellingRate;
            });
            data.totprice = totprice;

            if (data.paid === "true") {
                const index = activeSaleOrders.findIndex(order => order.id === data.id);
                if (index !== -1) {
                    activeSaleOrders.splice(index, 1);
                }
                completedSaleOrders.push(data);
                navigate('/sales');
            } else {
                activeSaleOrders.push(data);
            }

            onSubmit(data);

            // Close the modal after successful submission
            if (onClose) {
                onClose();
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleSellingRateChange = (index, value) => {
        const newSellingRates = [...sellingRates];
        newSellingRates[index] = value;
        setSellingRates(newSellingRates);
    };

    return (
        <form onSubmit={readOnly ? (e) => e.preventDefault() : handleSubmit(handleFormSubmit)}>
            <FormControl isReadOnly={readOnly}>
                <FormLabel>Customer ID</FormLabel>
                <Input type="text" {...register('customer_id', { required: true })} />
                {errors.customer_id && <span>This field is required</span>}
            </FormControl>

            {/* Product selection */}
            <FormControl isReadOnly={readOnly}>
                <FormLabel>Product</FormLabel>
                <Select {...register('product')} onChange={(e) => handleProductSelect(e.target.value)} >
                    <option value="">Select a Product</option>
                    {products.map(product => (
                        <option key={product.id} value={product.id}>{product.name}</option>
                    ))}
                </Select>
                {errors.product && <span>This field is required</span>}
            </FormControl>

            {/* SKU details */}
            {selectedProduct && selectedProduct.sku.map((sku, index) => {
                const remainingQuantity = sku.quantity_in_inventory - (watch(`items[${index}].quantity`) || 0);
                return (
                    <Box key={index} border="1px solid #ccc" borderRadius="md" p={3} my={2}>
                        <Flex alignItems="center" justifyContent="space-between">
                            <Box fontWeight="bold">SKU ({sku.id})</Box>
                            <Box>Rate: {sku.selling_price}</Box>
                        </Flex>
                        <Flex alignItems="center">
                            <FormControl flex="1" ml={2} isReadOnly={readOnly}>
                                <FormLabel>Selling Rate</FormLabel>
                                <Input
                                    type="number"
                                    value={sellingRates[index] || ''}
                                    onChange={(e) => handleSellingRateChange(index, e.target.value)}
                                />
                            </FormControl>
                            <FormControl flex="1" ml={3} mr={2} isReadOnly={readOnly}>
                                <FormLabel>Total Items</FormLabel>
                                <NumberInput>
                                    <NumberInputField {...register(`items[${index}].quantity`, { required: true })} />
                                </NumberInput>
                                {errors.items?.[index]?.quantity && <span>This field is required</span>}
                            </FormControl>
                        </Flex>
                        <Box color={remainingQuantity >= 0 ? 'green' : 'red'}>
                            Total items remaining: {remainingQuantity >= 0 ? remainingQuantity : 'Insufficient quantity'}
                        </Box>
                    </Box>
                );
            })}

            <FormControl isReadOnly={readOnly}>
                <FormLabel>Paid</FormLabel>
                <Select {...register('paid', { required: true })}>
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                </Select>
                {errors.paid && <span>This field is required</span>}
            </FormControl>
            <FormControl isReadOnly={readOnly}>
                <FormLabel>Invoice No</FormLabel>
                <Input type="text" {...register('invoice_no', { required: true })} />
                {errors.invoice_no && <span>This field is required</span>}
            </FormControl>
            <FormControl isReadOnly={readOnly}>
                <FormLabel>Invoice Date</FormLabel>
                <DatePicker selected={watch('invoice_date')} onChange={handleDateChange} isReadOnly={readOnly} />
                
            </FormControl>
            {!readOnly && <Button type="submit" mt={4}>Submit</Button>}
        </form>
    );
};

export default SaleOrderForm;
