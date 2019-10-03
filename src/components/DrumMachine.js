import React, { useEffect } from "react";

export default function DrumMachine() {
  // 2. when we get the data, press keyboard keys, get the sound
  useEffect(() => {
    document.addEventListener("keydown", e => {
      console.log(e.key);
      const myKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
      myKeys.map(key => {
        if (e.key.toUpperCase() === key) {
          playVid(e.key.toUpperCase());
        } else {
          return null;
        }
        return false;
      });
    });
  }, []);

  // 3. an array of ids and names
  let arr = [
    { id: "Q", sound: "Heater 1" },
    { id: "W", sound: "Heater 2" },
    { id: "E", sound: "Heater 3" },
    { id: "A", sound: "RP4 KICK 1" },
    { id: "S", sound: "Heater 6" },
    { id: "D", sound: "Chord 1" },
    { id: "Z", sound: "Chord 2" },
    { id: "X", sound: "Chord 3" },
    { id: "C", sound: "Punchy kick 1" }
  ];

  // mapping through the array of objects
  function mapIds(id) {
    console.log("passed in id: ", id);
    arr.map(each => {
      console.log("each ", each);
      if (each.id === id) {
        console.log("each id ", each.id);
        console.log(each.sound);
      }
    });
  }

  // 1. Play the sound function from HTML5 audio when clicked
  const playVid = str1 => {
    var vid = document.getElementById(str1);
    vid.play();
    console.log("clicked", str1);
    mapIds(str1);
  };

  return (
    <div>
      <div id="drum-machine">
        <div id="display">
          <div className="drum-pad-rows">
            <div
              className="drum-pad"
              id="Heater-1"
              onClick={() => playVid("Q")}
            >
              Q
              <audio id="Q" className="clip">
                <source
                  src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                  type="audio/mpeg"
                />
              </audio>
            </div>
            <div
              className="drum-pad"
              id="Heater-2"
              onClick={() => playVid("W", "Heater-2")}
            >
              W
              <audio id="W" className="clip">
                <source
                  src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                  type="audio/mpeg"
                />
              </audio>
            </div>
            <div
              className="drum-pad"
              id="Heater-3"
              onClick={() => playVid("E", "Heater-3")}
            >
              E
              <audio id="E" className="clip">
                <source
                  src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                  type="audio/mpeg"
                />
              </audio>
            </div>
          </div>
          <div className="drum-pad-rows">
            <div
              className="drum-pad"
              id="RP4_KICK_1"
              onClick={() => playVid("A")}
            >
              A
              <audio id="A" className="clip">
                <source
                  src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                  type="audio/mpeg"
                />
              </audio>
            </div>
            <div
              className="drum-pad"
              id="Heater-6"
              onClick={() => playVid("S")}
            >
              S
              <audio id="S" className="clip">
                <source
                  src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                  type="audio/mpeg"
                />
              </audio>
            </div>
            <div className="drum-pad" id="Chord_1" onClick={() => playVid("D")}>
              D
              <audio id="D" className="clip">
                <source
                  src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
                  type="audio/mpeg"
                />
              </audio>
            </div>
          </div>
          <div className="drum-pad-rows">
            <div className="drum-pad" id="Chord_2" onClick={() => playVid("Z")}>
              Z
              <audio id="Z" className="clip">
                <source
                  src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
                  type="audio/mpeg"
                />
              </audio>
            </div>
            <div className="drum-pad" id="Chord_3" onClick={() => playVid("X")}>
              X
              <audio id="X" className="clip">
                <source
                  src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
                  type="audio/mpeg"
                />
              </audio>
            </div>
            <div
              className="drum-pad"
              id="punchy_kick_1"
              onClick={() => playVid("C")}
            >
              C
              <audio id="C" className="clip">
                <source
                  src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
                  type="audio/mpeg"
                />
              </audio>
            </div>
          </div>
          {/* the current id board */}
          <div id="currentID" style={{ border: "1px solid purple" }}>
            lalala
          </div>
        </div>
      </div>
    </div>
  );
}
