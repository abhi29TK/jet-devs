import React, { useEffect, useState } from "react";
import { Container } from "./app.style";

// COMPONENTS
import Streamer from "./Streamer";

// TYPES
import { _Streamer } from "./streamer.defination";

// DATA
import __Streamers from "./streamer.data";

const App: React.FC = () => {
  const [streamers, setStreamers] = useState<null | _Streamer[]>(null);

  useEffect(() => {
    if (streamers === null) {
      setStreamers(__Streamers);
    }
  }, []);

  return (
    <Container>
      {streamers?.map((streamer) => (
        <Streamer
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
