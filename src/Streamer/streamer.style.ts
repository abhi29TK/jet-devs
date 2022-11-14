import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-top: 1px solid #c29999;
  border-bottom: 1px solid #c29999;

  position: absolute;
  left: 0;
  width: calc(100% - 20px);
  transition: top 0.8s ease-in-out;

  :nth-child(2n) {
    background-color: #f2f3ff;
  }
  :hover {
    background: #6192e4;
  }
`;

export const Details = styled.div`
  position: relative;
  z-index: 9;
  display: flex;
  align-items: center;
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
