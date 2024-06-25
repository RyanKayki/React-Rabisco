import React, { useState, useEffect } from 'react';
import CardList from '@/components/CardList';
import Headerb from '../components/Headerb';
import TituloProd from '../components/TituloProd';

export default function Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            fetch('http://127.0.0.1:5000/produto')
                .then(response => response.json())
                .then(data => setProdutos(data))
                .catch(error => console.error('Error fetching data:', error));
        };

        fetchData(); // Fetch data immediately on mount

        const interval = setInterval(fetchData, 1000); // Set up interval to fetch data every second

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);

    return (
        <>
            <Headerb />
            <TituloProd texto="Conheça nossos produtos!" />
            <CardList produtos={produtos} />
        </>
    )
}
