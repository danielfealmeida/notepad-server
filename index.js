import express from "express"
import notesRouter from "./routes/notes.js"
import createDatabase from "./factory/createDatabase.js"
import cors from "cors"

const app = express()
const database = createDatabase();

app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
})

app.listen(process.env.PORT, () => {
    console.log("[SERVER] => Server listening.")
    database.start()
})

app.use(express.json());

//database.add("user", { name: "Daniel" }, "daniel")

app.use("/notes", notesRouter);

app.get("/", (req, res) => {
    res.send("JSON API")
})