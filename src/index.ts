#!/usr/bin/env node
// the line above will allow to directly execute code
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hi there!");
});

app.listen(3005, () => {
  console.log("Listening on 3005");
});
