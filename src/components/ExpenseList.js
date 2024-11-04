/* ExpenseList.js */
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import db from '../firebase';
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

const ListContainer = styled(motion.div)`
    margin-top: 20px;
    background: linear-gradient(135deg, #fbc2eb, #a6c1ee);
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const ListItem = styled(motion.li)`
    margin: 10px 0;
    padding: 15px;
    background: #ffffff;
    border-radius: 12px;
    list-style-type: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

function ExpenseList() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'transactions'), (snapshot) => {
            setTransactions(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });

        return () => unsubscribe();
    }, []);

    return (
        <ListContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h3>Transactions</h3>
            <ul>
                {transactions.map((transaction) => (
                    <ListItem key={transaction.id} whileHover={{ scale: 1.02 }}>
                        {transaction.description}: ${transaction.amount.toFixed(2)} ({transaction.type})
                    </ListItem>
                ))}
            </ul>
        </ListContainer>
    );
}

export default ExpenseList;