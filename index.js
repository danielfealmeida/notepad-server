import express from "express"
import notesRouter from "./routes/notes.js"
import createDatabase from "./factory/createDatabase.js"
import cors from "cors"

const app = express()
const database = createDatabase();

app.listen(3000, () => {
    console.log("[SERVER] => Server listening.")
    database.start()
})

app.use(express.json());
app.use(cors())

//database.add("user", { name: "Daniel" }, "daniel")

app.use("/notes", notesRouter);