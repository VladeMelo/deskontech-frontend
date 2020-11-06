import styled, { css, keyframes } from 'styled-components';

interface ImageSectionProps {
  imgUrl: string;
}

interface CategoriesProps {
  selected?: boolean;
}

interface DiscountProps {
  selected?: boolean;
}

const barLoading = keyframes`
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
`;

export const Container = styled.div`
  background: #f9f9f9;
  min-height: 100vh;
`;

export const FreeShipping = styled.div`
  padding: 5px 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #222222;

  h1 {
    font-size: 16px;
    color: #f9f9f9;
    font-family: Poppins;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  h2 {
    font-size: 10px;
    color: #f9f9f9;
    font-family: Poppins;
    opacity: 0.9;
    text-transform: uppercase;
  }
`

export const LogoSection = styled.div`
  max-width: 1020px;
  margin: 5px auto 0;

  display: flex;
  align-items: center;

  padding: 0 10px;
`

export const MenuSection = styled.div`
  display: flex;
  flex: 1;
  visibility: hidden;

  svg {
    font-size: 30px;
    color: #415e97;

    transition: 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
  
  @media (max-width: 760px) {
    visibility: visible;
  }
`

export const Logo = styled.div`
  margin-top: 5px;
  padding: 6px 10px;
  width: 220px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #111111;
  position: relative;

  cursor: pointer;

  img {
    max-width: 95%;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    width: 0; 
    height: 0;
    border-bottom: 17px solid transparent;
    border-top: 17px solid transparent;
  
    border-left: 10px solid #f9f9f9;
  }

  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 0; 
    height: 0;
    border-bottom: 17px solid transparent;
    border-top: 17px solid transparent;
  
    border-right: 10px solid #f9f9f9;
  }
`

export const LoginSignUpSection = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  h1 {
    font-size: 20px;
    color: #415e97;
    font-family: Poppins;

    cursor: pointer;

    & + h1 {
      margin-left: 5px;

      &:before {
        content:'/';
        font-size: 20px;
        color: #415e97;
        margin-right: 5px;
      }
    }
  }

  div {
    margin-left: 30px;
    display: flex;
    align-items: center;

    cursor: pointer;

    svg {
      font-size: 20px;
      color: #415e97;
      transition: 0.2s;

      &:hover {
        transform: translateY(-2px) scale(1.1);
      }
    }

    h2 {
      font-size: 20px;
      margin-left: 4px;
      color: #415e97;
    }
  }
`

export const CategoriesSection = styled.div`
  max-width: 1020px;
  margin: 16px auto 0;
  padding: 0 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 760px) {
    display: none;
  }
`

export const Category = styled.h1<CategoriesProps>`
  font-family: Poppins;
  font-size: 19px;
  position: relative;

  cursor: pointer;

  ${props => props.selected && css`
    &:before {
      content: '';
      position: absolute;
      left: 0px;
      bottom: 0px;
      height: 2px;
      background: #111111;
      opacity: 0.8;
      width: 100%;
    }
  `}

  ${props => !props.selected && css`
    &:hover:before {
      content: '';
      position: absolute;
      left: 0px;
      bottom: 0px;
      height: 2px;
      width: 0px;
      background: #111111;
      opacity: 0.8;
      animation: ${barLoading} 0.8s;
      width: 100%;
    }
  `}
`

export const ProductSection = styled.div`
  max-width: 660px;
  margin: 16px auto 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Photo = styled.div`
  height: 260px;

  img {
    display: block;
    max-height: 100%;
  }
`

export const BuyProduct = styled.div`
  margin-top: 10px;
  padding: 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111111;
  transition: 0.2s;
  cursor: pointer;

  border-radius: 20px; 

  h3 {
    font-size: 20px;
    font-family: Poppins;
    color: #f9f9f9;
  }

  &:hover {
    transform: translateY(-3px);
  }
`

export const Product = styled.div`
  height: 300px;
  width: 220px;
  padding: 10px 5px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 8px;
    font-size: 16px;
    font-family: Poppins;
    color: #111111;
    text-align: center;
  }

  h2 {
    margin-top: 4px;
    font-size: 14px;
    font-weight: 600;
    color: gray;
  }
`