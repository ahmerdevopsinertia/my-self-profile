import React, { useEffect, useState } from "react";

import AutoTyping, { BlinkCursor } from "react-auto-typing";

import {
  getProfile,
  getExperience,
  getSkills,
} from "../../services/profileService";

const AutoType = () => {
  // let generalOutput = "Welcome, hope you are doing well !!!";
  const [generalOutput, setGeneralOutput] = useState([]);
  const [output, setOutput] = useState([]);
  const [delayToDel, setDelayToDel] = useState([]);
  const [outputDelayToDel, setOutputDelayToDel] = useState([]);
 

  useEffect(() => {
    setGeneralOutput("Welcome, hope you are doing well !!!");
    let mounted = true;
    let endpoint = "profile";
    setDelayToDel(2000);
    setOutputDelayToDel(6000);

    // set this inside timeout

    setTimeout(() => {
      console.log("This will run after 5 second!");
      setGeneralOutput("/profile");
      setDelayToDel(4000);
    }, 6000);

    setTimeout(() => {
      getProfile().then((response) => {
        if (mounted) {
          setOutput(response.data);
          setTimeout(() => {
            setGeneralOutput("/experience");
            setOutputDelayToDel(6000);
            getExperience().then((response) => {
              setOutput(response.data);
              setTimeout(() => {
                setGeneralOutput("/skills");
                getSkills().then((skills) => {
                  setOutput(skills.data[0].skill);
                });
              }, 7000);
            });
          }, 7000);
        }
      });
    }, 8000);
    // return () => clearTimeout(timer);
    return () => (mounted = false);
  }, []);

  return (
    <>
      <AutoTyping
        active // <boolean>
        textRef={generalOutput} // <string>
        writeSpeed={150} // <number>
        deleteSpeed={150} // <number>
        delayToWrite={1000/2} // <number>
        delayToDelete={delayToDel} // <number>
      />
      <BlinkCursor
        active // <boolean>
        blinkSpeed={500} // <number>
      />
      <br></br>
      <br></br>
      <AutoTyping
        active // <boolean>
        textRef={output} // <string>
        writeSpeed={150} // <number>
        deleteSpeed={150} // <number>
        delayToWrite={1000} // <number>
        delayToDelete={1000} // <number>
      />
      <BlinkCursor
        active // <boolean>
        blinkSpeed={500} // <number>
      />
    </>
  );
};

export default AutoType;
