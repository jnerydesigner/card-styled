import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const CardContainer = styled.div`
  position: relative;
  width: 350px;
  height: 150px;
  /* height: 300px; */
  transition: 0.5s;

  &:hover {
    height: 300px;
    cursor: pointer;
  }
`;
export const Lines = styled.div`
  position: absolute;

  inset: 0;
  background: #000;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    /* transform: translate(-50%, -50%); */
    width: 600px;
    height: 120px;

    background: linear-gradient(
      transparent,
      #8e44ad,
      #8e44ad,
      #8e44ad,
      transparent
    );
    animation: rotateBorderCard 3s linear infinite;
  }

  &:after {
    content: "";
    position: absolute;
    background: #292929;
    inset: 3px;
  }

  @keyframes rotateBorderCard {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
export const ImgBox = styled.div`
  position: absolute;
  top: -25%;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  background: #000;
  z-index: 10;

  overflow: hidden;

  img {
    position: absolute;
    top: 10px;
    left: 10px;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    z-index: 20;
  }

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 150px;

    background: linear-gradient(
      transparent,
      #9b59b6,
      #f1c40f,
      #c0392b,
      transparent
    );

    animation: rotateImgBox 4s linear infinite;
  }

  &:after {
    content: "";
    position: absolute;
    inset: 3px;
    background: #292929;
  }

  @keyframes rotateImgBox {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
`;

export const ContentInformation = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  transition: 0.5s;
  overflow: hidden;
  &:hover {
    opacity: 1;
  }
`;
export const DetailsInformation = styled.div`
  padding-top: 10px;
  width: 100%;
  transition: 0.5s;
  transform: translateY(-10%);
`;
export const TextDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    color: #3498db;
    font-size: 32px;
    font-weight: 600;
  }

  span {
    font-weight: 300;
    color: #fff;
  }
`;
export const DataDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const TextDataDetails = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100px;

  h3 {
    color: #3498db;
    font-size: 24px;
    font-weight: 600;
  }

  span {
    font-weight: 300;
    color: #fff;
  }
`;
export const ActionsButton = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  button {
    width: 150px;
    padding: 10px 30px;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 1em;
    font-weight: 500;
    background: #3498db;
    color: #fff;
    transition: 0.4s;
    &:hover {
      background: #2980b9;
    }
    &:first-child {
      margin-right: 10px;
    }
  }
`;
