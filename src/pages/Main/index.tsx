import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiShoppingCart, FiMenu } from 'react-icons/fi';

import { Container, FreeShipping, LogoSection, MenuSection, Logo, LoginSignUpSection, CategoriesSection, Category, ImageSection, TopTrending, TopTrendingProduct, Photo, ViewProduct, TopTrendingSection } from './styles';

import backgroundImg from '../../assets/background.jpg';
import productImg from '../../assets/galaxy-note20.png';

import GlobalStyles from '../../styles/global'

const Main = () => {
  const history = useHistory();

  const [openMenu, setOpenMenu] = useState(false);

  const handleSelectingSection = useCallback((category) => {
    history.push('/sec', {
      section: category
    });
  }, [history]);

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
            ['Gadgets', 'Audio & Video', 'Smart Devices', 'Camera & Photo', 'Games']
            .map(category => (
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
          <TopTrendingProduct>
            <Photo>
              <img src={productImg} alt='product' />
            </Photo>
            <h1>Brooks Men's Ghost 13 - Brown</h1>
            <h2>$42.99</h2>
            <ViewProduct>
              <h3>View Product</h3>
            </ViewProduct>
          </TopTrendingProduct>
          <TopTrendingProduct>
            <Photo>
              <img src={productImg} alt='product' />
            </Photo>
            <h1>Brooks Men's Ghost 13 - Brown</h1>
            <h2>$42.99</h2>
            <ViewProduct>
              <h3>View Product</h3>
            </ViewProduct>
          </TopTrendingProduct>
          <TopTrendingProduct>
            <Photo>
              <img src={productImg} alt='product' />
            </Photo>
            <h1>Brooks Men's Ghost 13 - Brown</h1>
            <h2>$42.99</h2>
            <ViewProduct>
              <h3>View Product</h3>
            </ViewProduct>
          </TopTrendingProduct>
          <TopTrendingProduct>
            <Photo>
              <img src={productImg} alt='product' />
            </Photo>
            <h1>Brooks Men's Ghost 13 - Brown</h1>
            <h2>$42.99</h2>
            <ViewProduct>
              <h3>View Product</h3>
            </ViewProduct>
          </TopTrendingProduct>
        </TopTrendingSection>
      </Container>
    </>
  )
}

export default Main;