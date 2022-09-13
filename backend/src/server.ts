import express from "express";
import helmet from "helmet";
import { DataSource } from "typeorm";
import { myDataSource } from "./myDataSource";

class Server {
  //   private userController: UserController;

  public app: express.Application;
  public dataSource: DataSource;

  constructor() {
    this.app = express();
    this.configuration();
    this.routes();
  }
  public configuration() {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(express.json());
    var cors = require("cors");

    this.app.use(cors());
  }

  public async routes() {
    myDataSource
      .initialize()
      .then(() => {
        // this.userController = new UserController();

        // this.app.use(`/api/user/`, this.userController.router);

        console.log("successfully connected to database");
        console.log("-----------------------------------");
      })
      .catch((error) => {
        console.log("failed connection with database", error);
        console.log("-----------------------------------");
      });
  }

  public start() {
    this.app.listen(this.app.get("port"), () => {
      this.app.use(helmet());
      console.log("-----------------------------------");
      console.log(`server is listening @ port: ${this.app.get("port")}`);
      console.log("-----------------------------------");
    });
  }
}

const server = new Server();
server.start();
