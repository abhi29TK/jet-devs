import React from "react";
import { Image, Ptext } from "../Reusable";
import {
  Details,
  DisplayName,
  ImgContainer,
  Points,
  Root,
  Score,
  Status,
  User,
} from "./streamer.style";

interface _props {
  userID: string;
  displayName: string;
  picture: string;
  score: number;
}

const Streamer: React.FC<_props> = ({
  userID,
  displayName,
  picture,
  score,
}) => {
  return (
    <Root>
      <Details>
        <User>
          <ImgContainer>{/* <Image /> */}</ImgContainer>
          <Status />
        </User>
        <DisplayName>{displayName}</DisplayName>
      </Details>
      <Points>
        <Score>{score}</Score>
        <Ptext>points</Ptext>
      </Points>
    </Root>
  );
};

export default Streamer;
