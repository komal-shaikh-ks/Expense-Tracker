/* App.js */
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { collection, onSnapshot } from 'firebase/firestore';
import db from './firebase';
import './styles.css';

function App() {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'transactions'), (snapshot) => {
            const transactionsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            
            // Calculate the balance based on income and expenses
            const totalBalance = transactionsData.reduce((total, transaction) => {
                return transaction.type === 'income'
                    ? total + transaction.amount
                    : total - transaction.amount;
            }, 0);

            setBalance(totalBalance);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="App">
            <Header />
            <Balance balance={balance} />
            <ExpenseForm />
            <ExpenseList />
        </div>
    );
}

export default App;