var MD5 = require("crypto-js/md5");
let PUBLIC_KEY = "1da26789400d41d2a05e193571341a2e";
let PRIVATE_KEY = "6f23795232f4c85265b1123b397f461efd93dcd4";

let ts = new Date().getTime();

// genarated hash key with cryptoJs library
// console.log(ts);
console.log(MD5(ts+PRIVATE_KEY + PUBLIC_KEY).toString());
console.log(ts);

