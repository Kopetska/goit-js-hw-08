import Player from "@vimeo/player";

const throttle = require("lodash.throttle");

const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);

const onPlay = function (data) {};

player.on("timeupdate", onPlay);
