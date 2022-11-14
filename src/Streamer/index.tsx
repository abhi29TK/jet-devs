import React from "react";
import { Ptext } from "../Reusable/resuable.style";
import Image from "../Reusable/Image";
import {
  Details,
  DisplayName,
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
  style: { [key: string]: string };
}

const Streamer: React.FC<_props> = ({
  userID,
  displayName,
  picture,
  score,
  style,
}) => {
  return (
    <Root style={style}>
      <Details>
        <User>
          <Image src={picture} alt={userID} />
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
