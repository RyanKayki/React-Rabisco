import React from 'react';
import CardProdutos from "./CardProdutos";

export default function CardList({ produtos }) {
    return (
        <div className="container">
            <div className="row">
                {produtos.map((produto, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <CardProdutos
                            img={produto[1]}
                            nome={produto[2]}
                            descricao={produto[3]}
                            preco={parseFloat(produto[4])}
                            quantidade={produto[5]}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
