// Esta página é responsável por renderizar cada produto de forma individual. 
// O nome do arquivo possui o nome id entre colchetes, o que possibilita ao react criar uma página dinâmica, contendo o id de cada produto

import Headerb from '@/components/Headerb'  // Importa o componente de cabeçalho
import Titulo from '@/components/Titulo'    // Importa o componente de título

import { useRouter } from 'next/router'     // Importa o hook useRouter do Next.js para acessar os parâmetros da URL
import { useEffect, useState } from 'react' // Importa os hooks useEffect e useState do React

import { getProdutoId } from '@/components/CardProdutos' // Importa a função que busca um produto pelo ID da API
import Link from 'next/link'              // Importa o componente Link do Next.js para navegação

export default function id() {

    // Cria uma variável do tipo useRouter, que conterá as informações da URL da página
    const router = useRouter()
    // Para pegar o id da URL, usamos o router.query
    const { id } = router.query

    // Estado para armazenar os dados do produto
    const [produto, setProduto] = useState(null)
    // Estado para controlar o carregamento da página
    const [loading, setLoading] = useState(true)

    // Função assíncrona para buscar os dados do produto pelo ID
    async function buscaProduto(produtoId) {
        try {
            // Chama a função getProdutoId para obter os dados do produto
            const data = await getProdutoId(produtoId)
            // Atualiza o estado com os dados do produto
            setProduto(data)
            // Define o estado de carregamento como falso
            setLoading(false)
        } catch (error) {
            // Em caso de erro, exibe a mensagem no console e define o estado de carregamento como falso
            console.error('Erro ao buscar produtos:', error)
            setLoading(false)
        }
    }

    // useEffect que executa a função buscaProduto quando o ID estiver disponível
    useEffect(() => {
        if (id) {
            buscaProduto(id)
        }
    }, [id]) // Dependência do useEffect para executar quando o ID mudar

    // Condicional para exibir "Carregando..." enquanto os dados estão sendo buscados
    if (loading) {
        return <div>Carregando...</div>
    }

    // Condicional para exibir uma mensagem de erro se o produto não for encontrado
    if (!produto) {
        return <div>Produto não encontrado.</div>
    }

    // Correção do tipo do preço, de string para number e formatação para duas casas decimais
    const precoFormatado = Number(produto.preco).toFixed(2)

    return (
        <>
            <Headerb />  // Renderiza o componente de cabeçalho
            <Titulo texto={produto.nome} /> // Renderiza o título com o nome do produto
            <div className="container my-4">
                <div className="row text-center my-2">
                    <div className="col-sm-12 col-lg-4">
                        // Renderiza a imagem do produto
                        <img src={`/produtos/${produto.nome}.png`} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-sm-12 col-lg-6 d-flex flex-column align-items-center">
                        // Renderiza a descrição do produto
                        <p className="card-text">{produto.descricao}</p>
                        // Renderiza o preço do produto formatado
                        <a href="#" className="btn btn-primary">R$ {precoFormatado}</a>
                        // Renderiza a quantidade de unidades em estoque
                        <h5 className="card-text text-success text-center">
                            {produto.quantidade} unidade (s) em estoque
                        </h5>
                    </div>
                </div>
                <div className="row text-center">
                    // Renderiza um botão para voltar à página de produtos
                    <Link href="/produtos"><button type="button" className="btn btn-dark">Voltar</button></Link>
                </div>
            </div>
        </>
    )
}