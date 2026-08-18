function makeCounter() {
  let count = 0;
  function log() {
    console.log(count);
  }
  count = 5;
  return log;
}

const logger = makeCounter();
logger(); // 5

"use client";

import { useState, useEffect } from "react";
