import express from "express";
import { createServer } from "http";
import path from "path";
import { Server, Socket } from "socket.io";

import { routes } from "./routes";

import "./database";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

app.get("/pages/client", (req, res) => {
  return res.render("html/client.html");
});

const http = createServer(app);
const io = new Server(http);

io.on("connection", (socket: Socket) => {
  console.log("Se conectou", socket.id);
});

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log("Server is running on port 3333"));
