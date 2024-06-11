import CardProdutos from "./CardProdutos";

export default function CardList(props){
    const { produtos } = props
    return (
        <div className="container">
                <div className="row">
                    {/* Estrutura de Repetição MAP*/}
                    {produtos.map(function (produtos, index){
                        return (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <CardProdutos
                            nome={produtos.nome}
                            descricao={produtos.descricao}
                            preco={produtos.preco}
                            quantidade={produtos.quantidade} />
                    </div>
                    )
            })}
                </div>
            </div>
    
    )
}