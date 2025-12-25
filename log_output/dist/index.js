"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nanoid_1 = require("nanoid");
const randomString = (0, nanoid_1.nanoid)(24);
const print = () => {
    const now = new Date().toISOString();
    console.log(`${now}: ${randomString}`);
};
setInterval(print, 5000);
