import React from 'react';
import Titulo from '@/components/Titulo';
import Headerb from '../components/Headerb';
import styles from '../styles/Contato.module.css'

export default function Contato() {
  return (
    <>
      <Headerb />
      <Titulo texto="Entre em contato conosco!" />
      <div className={styles.rabiscoInfo}>
        <p>
          A Rabisco é uma papelaria encantadora que oferece uma ampla variedade de produtos para todos os amantes de arte e escrita. Localizada em um espaço acolhedor no coração da cidade, a Rabisco é conhecida por sua atmosfera inspiradora e pela qualidade de seus produtos. Desde papelaria básica até materiais de arte profissional, a loja atende às necessidades de estudantes, artistas e profissionais criativos.
        </p>
        <p>
          Com uma equipe apaixonada por papelaria e arte, a Rabisco se destaca por seu atendimento personalizado e por proporcionar uma experiência de compra única. Além disso, a loja organiza regularmente workshops e eventos para incentivar a criatividade e o aprendizado contínuo de seus clientes.
        </p>
        <p>
          Seja você um entusiasta de desenhos, um aficionado por lettering ou alguém em busca dos melhores materiais para trabalhos manuais, a Rabisco é o seu destino ideal. Venha nos visitar e descubra um mundo de possibilidades criativas!
        </p>
      </div>
      <div className={styles.contatoInfo}>
        <h2>Formas de Contato:</h2>
        <ul>
          <li>Telefone: (00) 1234-5678</li>
          <li>E-mail: contato@rabisco.com.br</li>
          <li>Redes Sociais:</li>
          <ul>
            <li>
              Instagram:{' '}
              <a
                href="https://www.instagram.com/rabisco_papelaria"
                target="_blank"
                rel="noopener noreferrer"
              >
                @rabisco_papelaria
              </a>
            </li>
            <li>
              Facebook:{' '}
              <a
                href="https://www.facebook.com/rabisco.papelaria"
                target="_blank"
                rel="noopener noreferrer"
              >
                /rabisco.papelaria
              </a>
            </li>
          </ul>
          <li>Endereço: Rua das Artes, 123, Centro, Cidade das Artes, CEP 12345-678</li>
        </ul>
      </div>
    </>
  );
}
