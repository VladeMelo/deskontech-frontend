import React, { useCallback, useState } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Container, ModalContainer, Image, Information, ProductQuantity, Quantity, SubtractQuantity, AddQuantity, AddProductButton } from './styles'

interface ProductProps {
  name: string;
  image: string;
  description: string;
  price: number;
  turnModalOff(): void;
}

const Modal = ({name, image, description, price, turnModalOff}: ProductProps) => {

  const [quantity, setQuantity] = useState(1);

  const addQuantity = useCallback(() => {
    setQuantity(quantity + 1);
  }, [quantity])

  const subtractQuantity = useCallback(() => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }, [quantity])

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

          <ProductQuantity>
            <SubtractQuantity
              onClick={subtractQuantity}
            >
              <FiChevronLeft/>
            </SubtractQuantity>

            <Quantity>
              <h1>{quantity}</h1>
            </Quantity>

            <AddQuantity
              onClick={addQuantity}
            >
              <FiChevronRight/>
            </AddQuantity>
          </ProductQuantity>

          <AddProductButton>
            <h1>Add Product</h1>
          </AddProductButton>
        </Information>
      </ModalContainer>
    </Container>
  )
}

export default Modal;