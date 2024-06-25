import React from 'react';
import CardContatos from "./CardContatos"

export default function CardListCont({ contatos }) {
    return (
        <div className="container">
            <div className="row">
                {contatos.map((contato) => (
                    <div key={contato.id} className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4"> 
                        <CardContatos
                            avatar={contato.avatar}
                            first_name={contato.first_name}
                            last_name={contato.last_name}
                            email={contato.email}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
