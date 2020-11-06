import styled, { css, keyframes } from 'styled-components';

interface ImageSectionProps {
  imgUrl: string;
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

export const Category = styled.h1`
  font-family: Poppins;
  font-size: 19px;
  position: relative;

  cursor: pointer;
  
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
`

export const ImageSection = styled.div<ImageSectionProps>`
  margin: 16px auto 0;
  position: relative;
  width: 100%;
  height: 500px;
  background-image: url(${props => props.imgUrl});
  background-attachment: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    text-transform: uppercase;
    font-size: 20px;
    font-family: Poppins;
    color: #f9f9f9;
    text-align: center;
    letter-spacing: 3px;
  }

  h2 {
    text-transform: uppercase;
    font-size: 40px;
    font-family: Poppins;
    font-weight: bold;
    color: #f9f9f9;
    letter-spacing: 10px;
  }
`

export const TopTrending = styled.div`
  max-width: 1020px;
  margin: 10px auto 0;

  display: flex;
  justify-content: center;

  h1 {
    text-transform: uppercase;
    font-size: 30px;
    font-family: Poppins;
    font-weight: 600;
    color: #294988;
  }
`

export const TopTrendingSection = styled.div`
  max-width: 1020px;
  margin: 10px auto 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  padding: 0 10px;
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

export const TopTrendingProduct = styled.div`
  width: 180px;
  padding: 5px 5px 10px;

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

    /*text-decoration: line-through;*/
  }
`
