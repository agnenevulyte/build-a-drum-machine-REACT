import React, { useEffect, useState } from "react";
import DrumPads from "./DrumPads";
import Display from "./Display";

export default function DrumMachine() {
  const [currentPlayedSound, setCurrentPlayedSound] = useState("");

  // 2. when we get the data, press keyboard keys, get the sound
  useEffect(() => {
    document.addEventListener("keydown", e => {
      console.log(e.key);
      const myKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
      myKeys.map(key => {
        if (e.key.toUpperCase() === key) {
          playAudio(e.key.toUpperCase());
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
    let res = "";
    console.log("passed in id: ", id);
    arr.map(each => {
      console.log("each ", each);
      if (each.id === id) {
        console.log("each id ", each.id);
        console.log(each.sound);
        res = each.sound;
      }
    });
    return res;
  }

  // 1. Play the sound function from HTML5 audio when clicked
  const playAudio = str1 => {
    var audio = document.getElementById(str1);
    audio.currentTime = 0;
    audio.play();
    console.log("clicked", str1);
    const str = mapIds(str1);
    setCurrentPlayedSound(str);
  };

  return (
    <div id="drum-machine">
      <DrumPads playAudio={playAudio} />
      <Display valueToLogOut={currentPlayedSound} />
    </div>
  );
}
