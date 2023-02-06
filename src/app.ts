import express, { Express } from "express";
import { InstaconnectServer } from "./setupServer";
import databaseConnection from "./setupDatabase";

class Application {
  public initialize(): void {
    databaseConnection();
    const app: Express = express();
    const server: InstaconnectServer = new InstaconnectServer(app);
    server.start();
  }
}

const application: Application = new Application();
application.initialize();
