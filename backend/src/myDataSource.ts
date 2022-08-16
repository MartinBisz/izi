import { DataSource } from "typeorm";
import { join } from "path";

export const myDataSource = new DataSource({
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "",
  database: "izidb",
  synchronize: false,
  // name: "API",
  entities: [join(__dirname, "../database/entities/**/**{.ts,.js}")],
});
