import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
`

export const ModalContainer = styled.div`
  height: 300px;
  width: 600px;
  border: 6px solid #222222;
  background: #c9c9c9;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  > svg {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 20px;

    transition: 0.2s;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
  }
`

export const Image = styled.div`
  max-height: 180px;
  margin-right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    max-height: 100%;
    max-width: 100%;
  }
`

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px; 

  h1 {
    font-size: 28px;
    font-family: Poppins;
    color: #111111;
  }

  h2 {
    margin-top: 4px;
    font-size: 18px;
    font-weight: 600;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #222222;
  }

  h3 {
    margin-top: 6px;
    font-size: 12px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    color: #222222;
  }
`

export const ProductQuantity = styled.div`
  display: flex;
  margin-top: 10px;
`
export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  background: #111111;

  h1 {
    font-size: 12px;
    color: #c9c9c9;
  }
`
export const SubtractQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #415e97;
  cursor: pointer;

  svg {
    color: #c9c9c9;
    font-size: 16px;
  }
`
export const AddQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #415e97;
  cursor: pointer;

  svg {
    color: #c9c9c9;
    font-size: 16px;
  }
`

export const AddProductButton = styled.div`
  margin-top: 16px;
  padding: 5px;
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111111;
  transition: 0.2s;
  cursor: pointer;

  h1 {
    font-size: 14px;
    font-family: Poppins;
    color: #f9f9f9;
  }

  &:hover {
    transform: translateY(-3px);
  }
`


