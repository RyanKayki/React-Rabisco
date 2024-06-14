export default function CardProdutos(props) {
  return (
    <div className="card text-center h-100">
      <img className="card-image" src={props.img} alt={props.nome} style={{ width: '305px', height: '214px' }} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{props.nome}</h5>
          <p className="card-text min-vh-50">{props.descricao}</p>
        </div>
        <div className="card-button p-3">
          <a href="#" className="btn btn-primary">R$ {props.preco.toFixed(2)}</a>
        </div>
      </div>
      <div className="card-footer">
        <p className="card-text text-success">{props.quantidade} Unidade(s) Em Estoque</p>
      </div>
    </div>
  )
}

CardProdutos.defaultProps = {
  nome: 'Produto',
  descricao: 'Descrição do Produto',
  quantidade: 0,
  preco: 0.00
}
