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
  const [delayToDelete, setDelayToDelete] = useState([]);
  let typeTextForMe;

  useEffect(() => {
    let mounted = true;
    setDelayToDelete(2000);
    setGeneralOutput("Welcome, hope you are doing well !!!");

    typeTextForMe = () => {
      setTimeout(() => {
        setGeneralOutput("/profile");
        setTimeout(() => {
          getProfile().then((response) => {
            if (mounted) {
              setGeneralOutput(response.data);
              setDelayToDelete(5000);
              setTimeout(() => {
                setGeneralOutput("/experience");
                setTimeout(() => {
                  getExperience().then((response) => {
                    setGeneralOutput(response.data);
                    setDelayToDelete(3000);
                    setTimeout(() => {
                      setGeneralOutput("/skills");
                      setTimeout(() => {
                        getSkills().then((skills) => {
                          setGeneralOutput(skills.data[0].skill);
                          setTimeout(() => {
                            setGeneralOutput(typeTextForMe());
                          }, 2000);
                        });
                      }, 2000);
                    }, 3000);
                  });
                }, 2000);
              }, 4000);
            }
          });
        }, 2000);
      }, 5000);
    };

    setTimeout(() => {
      setGeneralOutput(typeTextForMe());
    }, 3000);
 

    // setTimeout(() => {
    //   setGeneralOutput("/profile");
    //   setTimeout(() => {
    //     getProfile().then((response) => {
    //       if (mounted) {
    //         setGeneralOutput(response.data);
    //         setTimeout(() => {
    //           setGeneralOutput("/experience");
    //           setTimeout(() => {
    //             getExperience().then((response) => {
    //               setGeneralOutput(response.data);
    //               setTimeout(() => {
    //                 setGeneralOutput("/skills");
    //                 setTimeout(() => {
    //                   getSkills().then((skills) => {
    //                     setGeneralOutput(skills.data[0].skill);
    //                   });
    //                 }, 2000);
    //               }, 3000);
    //             });
    //           }, 5000);
    //         }, 6000);
    //       }
    //     });
    //   }, 4000);
    // }, 5000);

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
        delayToWrite={0} // <number>
        delayToDelete={delayToDelete} // <number>
      />
      <BlinkCursor
        active // <boolean>
        blinkSpeed={500} // <number>
      />
    </>
  );
};

export default AutoType;
