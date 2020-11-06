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
    font-size: 18px;
    color: #415e97;
    font-family: Poppins;
    padding: 2px;
    border: 2px solid #415e97;

    cursor: pointer;
    transition: 0.2s;

    &+h1 {
      margin-left: 16px;
      color: #f9f9f9;
      background: #415e97;
    }

    &:hover {
      transform: translateY(-2px);
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

export const FilterAndProductSection = styled.div`
  margin: 32px auto 0;
  max-width: 1020px;
  
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 10px;
`

export const FilterSection = styled.div`
  max-width: 300px;
  width: 100%;
  padding: 10px;
  border: 2px solid #c9c9c9;
  
  display: flex;
  flex-direction: column;

  h1 {
    font-family: Poppins;
    font-size: 20px;
  }
`

export const PriceSection = styled.div`
  form {
    padding: 10px 0 20px;

    input {
      border: 1px solid #111111;
      border-radius: 3px;
      padding: 3px;
      width: 60px;
      height: 30px;
      
      ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
      }
      ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
      } 

      & + input {
        margin-left: 5px;
      }
    }

    button {
      margin-left: 5px;
      padding: 0 3px;
      background: #E7E9EC;
      border: 1px solid #8D9096;
      border-radius: 3px;
      color: #111111;
      font-family: Poppins;
      height: 30px;
    }
  }
`

export const DiscountSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0 20px;
`

export const Discount = styled.div<DiscountProps>`
  display: flex;
  align-items: center;

  div {
    width: 24px;
    height: 24px;
    border: 1px solid #111111;
    border-radius: 3px;
    margin-right: 8px;

    cursor: pointer;
    transition: 0.2s;

    svg {
      display: none;
    }

    ${props => props.selected && css`
      background: #294988;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        display: block;
        font-size: 20px;
        color: #f9f9f9;
      }
    `}
  }

  h2 {
    font-size: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;

    & + h2 {
      margin-left: 8px;
      color: #C1C1C1;
    }
  }

  & + div {
    margin-top: 5px;
  }
`

export const HeaderProductSection = styled.div`
  border-top: 2px solid #c9c9c9;
  padding-top: 10px;
  max-width: 660px;

  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 16px;
    font-family: Poppins;
  }

  select {
    padding: 3px;
    background: #E7E9EC;
    font-family: Poppins;

    cursor: pointer;
  }
`

export const ProductSection = styled.div`
  max-width: 660px;

  display: flex;
  flex-wrap: wrap; 
`

export const Photo = styled.div`
  height: 160px;

  img {
    display: block;
    max-height: 100%;
  }
`

export const ViewProduct = styled.div`
  margin-top: 10px;
  padding: 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111111;
  transition: 0.2s;
  cursor: pointer;

  h3 {
    font-size: 12px;
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
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #222222;
  }
`