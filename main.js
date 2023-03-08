const map = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// Convert id to base 62
const int2base62 = (n) => {
  let shortUrl = [];
  while (n) {
    shortUrl.push(map[n % 62]);
    n = Math.floor(n / 62);
  }

  shortUrl.reverse();

  return shortUrl.join("");
};

// Convert base62 to id
const base62ToInt = (shortUrl) => {
  let id = 0;

  for (i = 0; i < shortUrl.length; i++) {
    if ("a" <= shortUrl[i] && shortUrl[i] <= "z") {
      // charCodeAt gives the unicode value of the character
      id = id * 62 + shortUrl[i].charCodeAt(0) - "a".charCodeAt(0);
    }
    if ("A" <= shortUrl[i] && shortUrl[i] <= "Z") {
      id = id * 62 + shortUrl[i].charCodeAt(0) - "A".charCodeAt(0) + 26;
    }
    if ("0" <= shortUrl[i] && shortUrl[i] <= "9") {
      id = id * 62 + shortUrl[i].charCodeAt(0) - "0".charCodeAt(0) + 52;
    }
  }

  return id;
};

const shortUrl = int2base62(12345);
