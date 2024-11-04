/* ExpenseForm.js */
import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import db from '../firebase';
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

const FormContainer = styled(motion.form)`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    background: linear-gradient(135deg, #ff9a9e, #fad0c4);
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
    padding: 12px;
    width: 90%;
    border-radius: 8px;
    border: 1px solid #ddd;
`;

const Select = styled.select`
    padding: 10px;
    width: 94%;
    border-radius: 8px;
    border: 1px solid #ddd;
`;

const Button = styled(motion.button)`
    padding: 12px 24px;
    color: white;
    background: linear-gradient(135deg, #48c6ef, #6f86d6);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background: linear-gradient(135deg, #6f86d6, #48c6ef);
    }
`;

function ExpenseForm() {
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState('');
    const [type, setType] = useState('expense');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!amount || !description) {
            alert('Please enter both description and amount');
            return;
        }

        try {
            await addDoc(collection(db, 'transactions'), {
                description,
                amount: parseFloat(amount),
                type,
                createdAt: new Date()
            });
            setAmount(0);
            setDescription('');
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <FormContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
        >
            <Input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
            />
            <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                step="0.01"
            />
            <Select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </Select>
            <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Add Transaction</Button>
        </FormContainer>
    );
}

export default ExpenseForm;