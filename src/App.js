import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoginPage from './components/Auth/LoginPage';
import SaleOrderManagement from './pages/SaleOrderManagement';
import theme from './theme';
import ThemeToggle from './components/Auth/ThemeToggle';

const queryClient = new QueryClient();

function App() {
    return (
        <ChakraProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <Router>
                    <ThemeToggle />
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/sales" element={<SaleOrderManagement />} />
                        <Route path="*" element={<Navigate to="/login" />} />
                    </Routes>
                </Router>
            </QueryClientProvider>
        </ChakraProvider>
    );
}

export default App;

