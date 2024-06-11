import CardList from '@/components/CardList'
import Headerb from '../components/Headerb'
import Titulo from '../components/Titulo'

export default function produtos() {
    const produtos = [
        {
            "nome": "Caderno Universitário",
            "descricao": "Caderno universitário com 200 folhas pautadas.",
            "preco": 19.90,
            "quantidade": 50
        },
        {
            "nome": "Caneta Esferográfica Azul",
            "descricao": "Caneta esferográfica azul com ponta fina.",
            "preco": 1.50,
            "quantidade": 200
        },
        {
            "nome": "Lápis de Cor",
            "descricao": "Conjunto de 24 lápis de cor de alta qualidade.",
            "preco": 25.90,
            "quantidade": 30
        },
        {
            "nome": "Borracha Escolar",
            "descricao": "Borracha escolar branca macia.",
            "preco": 2.00,
            "quantidade": 150
        },
        {
            "nome": "Mochila Escolar",
            "descricao": "Mochila escolar resistente com múltiplos compartimentos.",
            "preco": 99.90,
            "quantidade": 20
        },
        {
            "nome": "Tesoura Escolar",
            "descricao": "Tesoura escolar sem ponta para segurança das crianças.",
            "preco": 7.50,
            "quantidade": 60
        },
        {
            "nome": "Estojo",
            "descricao": "Estojo grande com divisórias para organizar materiais.",
            "preco": 15.00,
            "quantidade": 40
        },
        {
            "nome": "Régua 30cm",
            "descricao": "Régua de 30cm em plástico transparente.",
            "preco": 3.00,
            "quantidade": 100
        },
        {
            "nome": "Corretivo Líquido",
            "descricao": "Corretivo líquido de secagem rápida.",
            "preco": 4.50,
            "quantidade": 80
        },
        {
            "nome": "Papel Sulfite A4",
            "descricao": "Papel sulfite A4 pacote com 500 folhas.",
            "preco": 25.00,
            "quantidade": 25
        },
        {
            "nome": "Apontador",
            "descricao": "Apontador com depósito para aparas.",
            "preco": 2.50,
            "quantidade": 90
        },
        {
            "nome": "Marcador de Texto",
            "descricao": "Conjunto de 6 marcadores de texto coloridos.",
            "preco": 12.00,
            "quantidade": 35
        }
    ]
    return (
        <>
            <Headerb />
            <Titulo texto="Conheça nossos produtos!" />
            <CardList produtos={produtos} />
        </>
    )
}
