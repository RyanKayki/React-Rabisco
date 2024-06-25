import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import Link from "next/link"

export default function CardProdutos(props) {
  return (
    <Card sx={{ maxWidth: 320, boxShadow: 'lg' }}>
      <img
        src={props.img}
        alt={props.nome}
        style={{ width: '100%', height: '250px' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link href={`${props.id}`}>{props.nome}
          <ArrowOutwardIcon style={{ marginRight: '5px', marginBottom: '5px' }} />
          </Link>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          R$ {props.preco.toFixed(2)} 
          <Chip
            label="Promoção"
            size="small"
            color="success"
            sx={{ ml: 'auto', mr: 1 }}
          />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ({props.quantidade} {props.quantidade === 1 ? 'unidade' : 'unidades'} em estoque)
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="error"
          size='large'
          style={{ width: '100%'}}
        >
          Adicionar ao carrinho
        </Button>
      </CardActions>
    </Card>
  );
}
