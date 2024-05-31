import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
import ActiveSaleOrders from './ActiveSaleOrders';
import CompletedSaleOrders from './CompletedSaleOrders';

const SaleOrderManagement = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('authenticated') !== 'true') {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <Box p={4}>
            <Tabs>
                <TabList>
                    <Tab>Active Sale Orders</Tab>
                    <Tab>Completed Sale Orders</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <ActiveSaleOrders />
                    </TabPanel>
                    <TabPanel>
                        <CompletedSaleOrders />
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Outlet />
        </Box>
    );
};

export default SaleOrderManagement;
