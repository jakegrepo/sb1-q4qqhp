import { Server } from "socket.io";

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      socket.on("join-game", (gameId) => {
        socket.join(gameId);
        console.log(`User joined game: ${gameId}`);
      });

      socket.on("mark-cell", ({ gameId, cellIndex }) => {
        io.to(gameId).emit("cell-marked", { cellIndex });
      });

      socket.on("bingo", (gameId) => {
        io.to(gameId).emit("game-won");
      });
    });
  }
  res.end();
};

export default SocketHandler;