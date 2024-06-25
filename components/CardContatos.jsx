import React from 'react'

export default function CardContatos({ email, first_name, last_name, avatar }) {
    return (
        <div className="card">
            <img className="card-img-top" src={avatar} style={{ width: '100%', height: '214px', borderRadius: '2%' }} />
            <div className="card-body" style={{ width: '250px', height: '100px', borderRadius: '2%' }}>
                <h5 className="card-title">{first_name} {last_name}</h5>
                <a href={`mailto:${email}`} className="card-text" style={{ fontSize: '14px' }}>{email}</a>
            </div>
        </div>
    )
}

CardContatos.defaultProps = {
    nome: 'Produto',
    descricao: 'Descrição do Produto',
    quantidade: 0,
    preco: 0.00
}
