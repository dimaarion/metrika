import axios from "axios";
let inital_base_url = "http://adminpanel";
if (window.location.hostname === "localhost") {
  inital_base_url = "http://fk-i-s.local";
} else {
  inital_base_url = window.location.protocol + "//" + window.location.hostname;
}

export function get(f, url, params = {}) {
  axios.get(inital_base_url + url, params).then((rezult) => {
    f(rezult.data);
  });
}

export function getLocal(f, url, params = {}) {
  axios.get(url, params).then((rezult) => {
    f(rezult.data);
  });
}

export const collidePointRect = function (pointX, pointY, x, y, xW, yW) {
  //2d
  if (
    pointX >= x && // right of the left edge AND
    pointX <= x + xW && // left of the right edge AND
    pointY >= y && // below the top AND
    pointY <= y + yW
  ) {
    // above the bottom
    return true;
  }
  return false;
};
export function procent(h, p) {
  return (p / h) * 100;
}
