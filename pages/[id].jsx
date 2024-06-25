import Headerb from '@/components/Headerb'  
import TituloLoading from '@/components/TituloLoading'
import TituloProd from '@/components/TituloProd'    
import { useRouter } from 'next/router'    
import { useEffect, useState } from 'react' 
import { getProdutoId } from '@/services/apiProduto' 
import Link from 'next/link'
import styles from '../styles/loading.module.css'

export default function Produto() {
    const router = useRouter()
    const { id } = router.query
    const [produto, setProduto] = useState(null)
    const [loading, setLoading] = useState(true)

    async function buscaProduto(produtoId) {
        try {
            const data = await getProdutoId(produtoId)
            setProduto(data)
            setLoading(false)
        } catch (error) {
            console.error('Erro ao buscar produtos:', error)
            setLoading(false)
        }
    }

    useEffect(() => {
        const fetchProduto = async () => {
            if (id) {
                await buscaProduto(id)
            }
        };

        // Simulate loading delay
        const timeout = setTimeout(() => {
            fetchProduto();
        }, 4500);

        return () => clearTimeout(timeout);
    }, [id]);

    if (loading) {
        return (
            <>
                <Headerb />
                <TituloLoading />
                <div className={styles.loader}></div>
            </>
        )
    }

    if (!produto) {
        return <div>Produto não encontrado.</div>
    }

    const precoFormatado = Number(produto.preco).toFixed(2)

    return (
        <>
            <Headerb />  
            <TituloProd texto="Aqui Esta..."/>
            <div className="container d-flex justify-content-center my-4">
                <div className="card" style={{ width: '24rem' }}>
                    <img src={`${produto.img}`} className="card-img-top" alt={produto.nome} />
                    <div className="card-body d-flex flex-column align-items-center">
                        <h5 className="card-title">{produto.nome}</h5>
                        <p className="card-text">{produto.descricao}</p>
                        <a href="#" className="btn btn-primary mb-2">R$ {precoFormatado}</a>
                        <h5 className="card-text text-success">
                            {produto.quantidade} unidade(s) em estoque
                        </h5>
                        <Link href="/produtos">
                            <button type="button" className="btn btn-dark mt-2">Voltar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
