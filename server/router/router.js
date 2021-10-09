const express = require("express");
const multer = require("multer");

const router = express.Router();

const multerStorage = multer.memoryStorage();
const upload = multer({
  storage: multerStorage,
});

module.exports = {
  router: router,
};
