import React from 'react';
import { FiX } from 'react-icons/fi';

import { Container, ModalContainer, Image, Information, AddProductButton } from './styles'

interface ProductProps {
  name: string;
  image: string;
  description: string;
  price: number;
  turnModalOff(): void;
}

const Modal = ({name, image, description, price, turnModalOff}: ProductProps) => {

  return (
    <Container>
      <ModalContainer>
        <FiX 
          onClick={turnModalOff}
        />

        <Image>
          <img src={image} alt='Produto' />
        </Image>

        <Information>
          <h1>{name}</h1>
          <h2>R$ {price}</h2>
          <h3>{description}</h3>

          <AddProductButton>
            <h1>Add Product</h1>
          </AddProductButton>
        </Information>
      </ModalContainer>
    </Container>
  )
}

export default Modal;