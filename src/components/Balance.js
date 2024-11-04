/* Balance.js */
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

const BalanceContainer = styled(motion.div)`
    margin-top: 20px;
    font-size: 1.5em;  // Further reduced font size to fit the screen
    color: #333;
    padding: 20px;
    background: linear-gradient(135deg, #a1c4fd, #c2e9fb);
    border-radius: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    text-align: center;
    max-width: 90%;
    margin: 20px auto;
    word-break: break-word;  // Ensure long text wraps properly
`;



function Balance({ balance }) {
    return (
        <BalanceContainer
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2>Balance: ${balance.toFixed(2)}</h2>
        </BalanceContainer>
    );
}

export default Balance;