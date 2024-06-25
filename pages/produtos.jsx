import React, { useState, useEffect } from 'react';
import CardList from '@/components/CardList';
import Headerb from '../components/Headerb';
import TituloProd from '../components/TituloProd';
import { getProdutos } from '@/services/apiProduto'


export default function Produtos() {
    const [produtos, setProdutos] = useState([])
    const [resultado, setResultado] = useState(null)

    async function buscaProdutos() {
        try {
            const data = await getProdutos()
            setProdutos(data)
        } catch (error) {
            console.error('Erro ao buscar produtos:', error)
        }
    }

    useEffect(() => {
        buscaProdutos()
    }, [])

    return (
        <>
            <Headerb/>
            <TituloProd texto="Conheça nossos produtos!" />
            <CardList produtos={resultado || produtos} />
        </>
    )
}
