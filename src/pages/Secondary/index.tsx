import React, { useState, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FiShoppingCart, FiMenu, FiCheck } from 'react-icons/fi';
import { Form } from '@unform/web';

import { Container, FreeShipping, LogoSection, MenuSection, Logo, LoginSignUpSection, CategoriesSection, Category, FilterAndProductSection, FilterSection, PriceSection, DiscountSection, Discount, HeaderProductSection, ProductSection, Product, Photo, ViewProduct } from './styles';

import Input from '../../components/Input'
import Modal from '../../components/Modal'

import iphone8Img from '../../assets/iphone8.png';
import galaxyNote20Img from '../../assets/galaxy-note20.png';
import samsungGalaxyGearFitSmartWatch from '../../assets/samsung-galaxy-gear-fit-smart-watch.png';

import GlobalStyles from '../../styles/global'

interface LocationProps {
  section: string;
}

interface ProductProps {
  name: string;
  image: string;
  description: string;
  price: number;
}

const productsInfo = [
  {
    name: `Brooks Men's Ghost 13 - Brown`, 
    image: iphone8Img,
    description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
    price: 42.99
  },
  {
    name: `Brooks Men's Ghost 13 - Brown`, 
    image: galaxyNote20Img,
    description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
    price: 42.99
  },
  {
    name: `Brooks Men's Ghost 13 - Brown`, 
    image: samsungGalaxyGearFitSmartWatch,
    description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
    price: 42.99
  },
  {
    name: `Brooks Men's Ghost 13 - Brown`, 
    image: galaxyNote20Img,
    description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
    price: 42.99
  },
  {
    name: `Brooks Men's Ghost 13 - Brown`, 
    image: iphone8Img,
    description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
    price: 42.99
  },
  {
    name: `Brooks Men's Ghost 13 - Brown`, 
    image: samsungGalaxyGearFitSmartWatch,
    description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
    price: 42.99
  }
] 

const Secondary = () => {
  const history = useHistory();
  const location = useLocation<LocationProps>();
  const { section } = location.state;

  const [selectedToFilter, setSelectedToFilter] = useState<string[]>([]);
  const [productSelected, setProductSelected] = useState<ProductProps>({} as ProductProps)
  const [modalOpen, setModalOpen] = useState(false)

  const handleSelectingSection = useCallback((category) => {
    history.push('/sec', {
      section: category
    });
  }, [history]);

  const handleSelectingFilter = (filterSelected: string) => {
    const findSelected = selectedToFilter.findIndex(selected => selected === filterSelected);

    if (findSelected === -1) {
      setSelectedToFilter([...selectedToFilter, filterSelected])
    } else {
      setSelectedToFilter(selectedToFilter.filter(x => x !== filterSelected))
    }
  }

  const turnModalOn = (product: ProductProps) => {
    setModalOpen(true);
    setProductSelected(product);
  }

  const turnModalOff = () => {
    setModalOpen(false);
  }

  return (
    <>
      <GlobalStyles/>
      <Container>
        <FreeShipping>
          <h1>Free Shipping on orders over $75*</h1>
          <h2>*Valid in Continental U.S. only</h2>
        </FreeShipping>

        <LogoSection>
          <MenuSection>
            <FiMenu />
          </MenuSection>

          <Logo
            onClick={() => history.push('/')}
          >
            <img src='https://fontmeme.com/permalink/200916/057fb400e47981463e503cff3d4a5ca7.png' alt='Logo' />
          </Logo>

          <LoginSignUpSection>
            <h1>Login</h1>
            <h1>SignUp</h1>

            <div>
              <FiShoppingCart />
              <h2>(0)</h2>
            </div>
          </LoginSignUpSection>
        </LogoSection>

        <CategoriesSection>
          {
            ['Gadgets', 'Audio & Video', 'Smart Devices', 'Camera & Photo', 'Games']
            .map(category => (
              <Category
                onClick={
                  () => handleSelectingSection(category)
                }
                selected={category === section}
              >{category}</Category>
            ))
          }
        </CategoriesSection>

        <FilterAndProductSection>
          <FilterSection>
            <h1>Price</h1>
            <PriceSection>
              <Form
                onSubmit={() => console.log('hey')}
              >
                <Input 
                  name='min'
                  className='input'
                  type='number' 
                  placeholder='Min'
                />
                <Input 
                  name='name'
                  className='input'
                  type='number' 
                  placeholder='Max'
                />
                <button
                  type='submit'
                >Go</button>
              </Form>
            </PriceSection>

            <h1>Descontos</h1>
            <DiscountSection>
              <Discount
                selected={selectedToFilter.findIndex(
                  selected => selected === 'a'
                ) !== -1}
              >
                <div
                  onClick={() => handleSelectingFilter('a')}
                >
                  <FiCheck />
                </div>
                <h2>até 10%</h2>
                <h2>(13)</h2>
              </Discount>
              <Discount
                selected={selectedToFilter.findIndex(
                  selected => selected === 'b'
                ) !== -1}
              >
                <div
                  onClick={() => handleSelectingFilter('b')}
                >
                  <FiCheck />
                </div>
                <h2>de 10% até 25%</h2>
                <h2>(6)</h2>
              </Discount>
            </DiscountSection>
          </FilterSection>
            

          <div>
            <HeaderProductSection>
              <h1>13 produtos</h1>

              <select>
                <option value='Brazil'>Mais Vendidos</option>
                <option value='England'>Menores Preços</option>
                <option value='Germany'>Maiores Preços</option>
              </select>
            </HeaderProductSection>

            <ProductSection>
              {productsInfo.map(product => (
                <Product>
                  <Photo>
                    <img src={product.image} alt='product' />
                  </Photo>
                  <h1>{product.name}</h1>
                  <h2>${product.price}</h2>
                  <ViewProduct
                    onClick = {() => turnModalOn(product)}
                  >
                    <h3>View Product</h3>
                  </ViewProduct>
                </Product>
              ))}
            </ProductSection>
          </div>
        </FilterAndProductSection>
      </Container>
      {modalOpen &&
        <Modal
          {...productSelected}
          turnModalOff={turnModalOff}
        />
      }
    </>
  )
}

export default Secondary;