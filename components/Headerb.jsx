import Link from 'next/link'
import styles from '../styles/Headerb.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Headerb(props) {

    const [busca, setBusca] = useState("")
    // Inicializa o hook useRouter para obter informações sobre a rota atual
    const router = useRouter()
    
    // Função para atualizar o estado de busca com o valor do input
    const atualiza = (event) => {
        setBusca(event.target.value)
    }

    // Função para lidar com o envio do formulário de busca
    const handleSearchSubmit = (event) => {
        // Evita a recarga da página ao enviar o formulário
        event.preventDefault()
        // Chama a função de busca passada via props com o termo de busca
        props.funcao(busca)
    }

    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <img src="logo/logo2.png" className={styles.img}/>
                <Link className="navbar-brand ms-3" href="#">Rabisco</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/produtos">Produtos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/contato">Contato</Link>
                        </li>
                        <li>
                            {props.title}
                        </li>
            
                    </ul>
                    {router.pathname == '/produtos' && (
                        <form
                        className="d-flex"
                        role="search"
                        onSubmit={handleSearchSubmit}>
                        <input
                            className="form-control me-2"
                            type="search"
                            value={busca}
                            onChange={atualiza}
                            placeholder="Buscar produto"
                        />
                        <button className="btn btn-outline-white" type="submit">Buscar</button>
                    </form>
                    )}
                </div>
            </div>
        </nav>
    )
}