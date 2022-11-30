import chalk from "chalk";
import cors from "cors";
import express, { json } from "express";
import authRouter from "./routes/authRouter.js";
import tweetRouter from "./routes/tweetRouter.js";

class Server {
  constructor(port, app) {
    this.port = port;
    this.app = app;
  }

  configRouter() {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(authRouter);
    this.app.use(tweetRouter);
  }

  listen() {
    this.app.listen(this.port, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(chalk.bold.blue("Servidor funfando de boas!!!"));
      }
    });
  }
}

let server = new Server(5001, express());

server.configRouter();
server.listen();
