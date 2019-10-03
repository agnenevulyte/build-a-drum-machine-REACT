import React from "react";

export default function DrumPads({ playVid }) {
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
        </div>
      </div>
    </div>
  );
}
