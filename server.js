const express = require("express");
const app = express();
const mongoose = require("mongoose");

const configMain = require("./server/config/configMain.js");
const router = require("./server/router/router.js");

app.use("/", router.router);

async function startServer() {
  try {
    await mongoose.connect(configMain.MONGO_URL);
    console.log("Соединение с БД установлено");

    app.listen(configMain.PORT, () => {
      console.log(`Сервер запущен на порту ${configMain.PORT}`);
    });
  } catch (e) {
    console.log("При запуске сервера произошла ошибка");
  }
}

startServer();
