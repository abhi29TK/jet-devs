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
      if (index === idToUpdate) {
        const updateScoreBy = randomNumber({ high: 1000, low: 10000 });
        return {
          ..._streamer,
          score: _streamer.score + updateScoreBy,
          up: true,
        };
      }
      return { ..._streamer, up: false };
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
    const scoreInterval = setInterval(updateScoreRandomly, 1000);
    return () => clearInterval(scoreInterval);
  }, []);

  return (
    <Container style={{ height: `${75 * streamers!.length}px` }}>
      {streamers?.map((streamer, index) => {
        return (
          <Streamer
            style={{
              top: `${75 * index}px`,
              zIndex: `${streamer.up ? 10 : 1}`,
            }}
            key={streamer.userID}
            userID={streamer.userID}
            displayName={streamer.displayName}
            picture={streamer.picture}
            score={streamer.score}
          />
        );
      })}
    </Container>
  );
};

export default App;
