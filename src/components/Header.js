/* Header.js */
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

const HeaderContainer = styled(motion.header)`
    text-align: center;
    padding: 20px;
    background: linear-gradient(135deg, #ff6b6b, #f8b400);
    color: #fff;
    border-radius: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

function Header() {
    return (
        <HeaderContainer
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1>Expense Tracker</h1>
        </HeaderContainer>
    );
}

export default Header;