import React, { useEffect, useState } from "react";

import AutoTyping, { BlinkCursor } from "react-auto-typing";

import { getProfile } from '../../services/profileService';

const AutoType = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getProfile().then((items) => {
      console.log(`output is=> ${JSON.stringify(items)}`);
      if (mounted) {
        setList(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <>
      <AutoTyping
        active // <boolean>
        textRef="Your string text" // <string>
        writeSpeed={150} // <number>
        deleteSpeed={150} // <number>
        delayToWrite={2000} // <number>
        delayToDelete={2000} // <number>
      />
      <BlinkCursor
        active // <boolean>
        blinkSpeed={500} // <number>
      />
    </>
  );
};

export default AutoType;
