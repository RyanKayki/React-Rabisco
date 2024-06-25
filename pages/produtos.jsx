import React, { useState, useEffect } from 'react';
import CardList from '@/components/CardList';
import Headerb from '../components/Headerb';
import TituloProd from '../components/TituloProd';


export async function getProdutoId(id) {
    try {
        // Fazemos uma requisição GET para o endpoint '/produto/' seguido do ID do produto.
        const response = await api.get('/produto/' + id)
        // Se a requisição for bem-sucedida, retornamos os dados da resposta.
        return response.data
    } catch (error) {
        // Se houver um erro na requisição, capturamos esse erro no bloco catch.
        // Registramos uma mensagem de erro no console.
        console.error(`Erro ao buscar o produto: ${error.message}`)
    }
}

// Definimos uma função assíncrona chamada getProdutoNome, que vai buscar produtos pelo nome ou termo relacionado.
export async function getProdutoNome(termo) {
    try {
        // Fazemos uma requisição GET para o endpoint '/produto/nome/' seguido do termo de busca.
        const response = await api.get(`/produto/nome/${termo}`)
        // Se a requisição for bem-sucedida, retornamos os dados da resposta.
        return response.data
    } catch (error) {
        // Se houver um erro na requisição, capturamos esse erro no bloco catch.
        // Registramos uma mensagem de erro no console e retornamos um array vazio.
        console.error(`Erro ao buscar o termo: ${error.message}`)
        return []
    }
}

export default function Produtos() {
    const [produtos, setProdutos] = useState([]);
    const [resultado, setResultado] = useState(null)

    useEffect(() => {
        const fetchData = () => {
            fetch('http://127.0.0.1:5000/produto')
                .then(response => response.json())
                .then(data => setProdutos(data))
                .catch(error => console.error('Error fetching data:', error))
        }

        fetchData()

        const interval = setInterval(fetchData, 1000) 

        return () => clearInterval(interval)
    }, [])


    async function pegarTermo(termo) {
        // Verifica se o termo de busca é válido
        if (termo && termo.length > 0) {
            try {
                // Chama a função getProdutoNome para obter os dados dos produtos pelo termo
                const data = await getProdutoNome(termo)
                // Atualiza o estado com os dados dos produtos encontrados
                setResultado(data)
            } catch (error) {
                // Em caso de erro, exibe a mensagem no console e define o resultado como null
                console.error('Erro ao fazer a busca por termos:', error)
                setResultado(null)
            }
        } else {
            // Em caso de erro na utilização da busca, exibe a mensagem no console e define o resultado como null
            console.error("Erro ao utilizar a busca.")
            setResultado(null)
        }
    }

    

    return (
        <>
            <Headerb funcao={pegarTermo}/>
            <TituloProd texto="Conheça nossos produtos!" />
            <CardList produtos={resultado || produtos} />
        </>
    )
}
