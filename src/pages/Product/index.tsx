import React, { useEffect, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import AOS from 'aos';
import { FiShoppingCart, FiMenu } from 'react-icons/fi';

import { Container, FreeShipping, LogoSection, MenuSection, Logo, LoginSignUpSection, CategoriesSection, Category, ProductSection, Product, Photo, BuyProduct } from './styles';

import galaxyNote20Img from '../../assets/galaxy-note20.png';

import GlobalStyles from '../../styles/global'

interface LocationProps {
  section: string;
}

const Secondary = () => {
  const history = useHistory();
  const location = useLocation<LocationProps>();
  const { section } = location.state;

  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  })

  const handleSelectingSection = useCallback((category) => {
    history.push('/sec', {
      section: category
    });
  }, [])

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
            <img src='https://fontmeme.com/permalink/200916/057fb400e47981463e503cff3d4a5ca7.png' />
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

        <ProductSection>
          <Photo>
            <img src={galaxyNote20Img} alt='product' />
          </Photo>

          <Product>
            <h1>Brooks Men's Ghost 13 - Brown</h1>
            <h2>$42.99</h2>
            <BuyProduct>
              <h3>Add to Cart</h3>
            </BuyProduct>
          </Product>
        </ProductSection>
      </Container>
    </>
  )
}

export default Secondary;