const express = require("express");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoute");
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.use("/", userRoutes);

app.listen(PORT, console.log(`listeniting to PORT ${PORT}`));
