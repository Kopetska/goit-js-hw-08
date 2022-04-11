import Player from "@vimeo/player";

import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);

const onPlay = function (data) {
  player
    .setCurrentTime(localStorage.data.value)
    .then(function (seconds) {
      const dataSecond = JSON.stringify(data.seconds);
      localStorage.setItem("videoplayer-current-time", dataSecond);
    })
    .catch(function (error) {
      switch (error.name) {
        case "RangeError":
          break;

        default:
          break;
      }
    });
};

player.on("timeupdate", throttle(onPlay, 100));
