import React, { useEffect, useState } from "react";
import { Container } from "./app.style";
import Streamer from "./Streamer";
import { _Streamer } from "./streamer.defination";
import __Streamers from "./streamer.data";

const App: React.FC = () => {
  const [streamers, setStreamers] = useState<null | _Streamer[]>(__Streamers);

  const randomNumber = ({ high, low = 0 }: { high: number; low?: number }) => {
    return Math.floor(Math.random() * (high - low) + low);
  };

  const updateScore = ({
    data,
    idToUpdate,
  }: {
    data: _Streamer[];
    idToUpdate: number;
  }) => {
    return data.map((_streamer, index) => {
      if (index === 7) {
        const updateScoreBy = randomNumber({ high: 1000, low: 100 });
        return {
          ..._streamer,
          score: _streamer.score + 1000,
          up: true,
        };
      }
      const arr = { ..._streamer, up: false };
      return arr;
    });
  };

  const updateScoreRandomly = () => {
    const randomID = Math.floor(Math.random() * 10);
    setStreamers((state) => {
      if (state === null) return null;
      return updateScore({ data: state, idToUpdate: randomID }).sort(
        (streamerA, streamerB) => streamerB.score - streamerA.score
      );
    });
  };

  useEffect(() => {
    const scoreInterval = setInterval(updateScoreRandomly, 1250);
    return () => clearInterval(scoreInterval);
  }, []);

  return (
    <Container style={{ height: `${75 * streamers!.length}px` }}>
      {streamers?.map((streamer, index) => (
        <Streamer
          // style={{ top: `${75 * index}px` }}
          up={streamer.up}
          style={{
            // transform: `${
            //   streamer.up ? `translateY(${"+"}${75 * index}px)` : ``
            // }`,

            zIndex: `${streamer.up ? 10 : 1}`,
          }}
          index={index}
          className={streamer.up ? "" : "item-fadeout"}
          key={streamer.userID}
          userID={streamer.userID}
          displayName={streamer.displayName}
          picture={streamer.picture}
          score={streamer.score}
        />
      ))}
    </Container>
  );
};

export default App;
