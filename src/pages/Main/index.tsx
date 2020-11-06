import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiShoppingCart, FiMenu } from 'react-icons/fi';

import topTrendingProducts from '../../data/topTrendingProducts';
import categories from '../../data/categories';

import { Container, FreeShipping, LogoSection, MenuSection, Logo, LoginSignUpSection, CategoriesSection, Category, ImageSection, TopTrending, TopTrendingProduct, Photo, ViewProduct, TopTrendingSection } from './styles';

import Modal from '../../components/Modal'

import backgroundImg from '../../assets/background.jpg';

import GlobalStyles from '../../styles/global'

interface ProductProps {
  name: string;
  image: string;
  description: string;
  price: number;
}

const Main = () => {
  const history = useHistory();

  const [openMenu, setOpenMenu] = useState(false);
  const [productSelected, setProductSelected] = useState<ProductProps>({} as ProductProps);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSelectingSection = useCallback((category) => {
    history.push('/products', {
      section: category
    });
  }, [history]);

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
            <FiMenu 
              onClick={() => setOpenMenu(!openMenu)}
            />
          </MenuSection>

          <Logo>
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
            categories.map(category => (
              <Category
                onClick={
                  () => handleSelectingSection(category)
                }
              >{category}</Category>
            ))
          }
        </CategoriesSection>

        <ImageSection imgUrl={backgroundImg} >
          <h1>New Season</h1>
          <h2>The Rosen</h2>
        </ImageSection>

        <TopTrending>
          <h1>Top Trending</h1>
        </TopTrending>

        <TopTrendingSection>
          {topTrendingProducts.map(product => (
            <TopTrendingProduct>
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
            </TopTrendingProduct>
          ))}
        </TopTrendingSection>
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

export default Main;