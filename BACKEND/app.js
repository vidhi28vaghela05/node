// setup env file
const dotenv = require("dotenv");
dotenv.config()

const express = require("express");
const db = require("./config/db");
const cors = require("cors");
const userRoutes = require("./routes/web/user.route");

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
db();

// cors origin --> allows only that website or port that mention into origin group. backend only response localhost 5000 send request other than give cors origin error

app.use(cors({origin: process.env.FRONTEND_URL, credentials: true }));

// to express env values in file:
// backend (node + express) --> process
PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("server's Homepage")
});

// Routes
app.use("/user", userRoutes);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});