import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: #40e0d0;
`;

export const Details = styled.div`
  position: relative;
  z-index: 9;
`;

export const Points = styled.div`
  display: flex;
  align-items: baseline;
`;

export const DisplayName = styled.h4`
  font-size: 16px;
  line-height: 1.2;
  margin: 0 0 0 10px;
`;

export const Score = styled.h5`
  font-size: 18px;
  line-height: 1.2;
  margin: 0;
`;

export const User = styled.div`
  position: relative;
  z-index: 9;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  background: red;
  z-index: 9;
  border: 2px solid #ffffff;
`;

export const Status = styled.div`
  position: absolute;
  bottom: 0;
  right: 9px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: green;
  z-index: 99;
`;
