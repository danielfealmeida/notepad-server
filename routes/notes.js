import express from "express"
import createDatabase from "../factory/createDatabase.js"
import database from "../firebase/init.js"
import cors from "cors"

const router = express.Router()
const db = createDatabase()

app.use(cors())

router.get("/:user", async (req, res) => {
    let data = []
    database.collection("notes").where("user", "==", req.params.user).get().then((query) => {
        query.forEach((doc) => {
            data.push(doc.data())
            console.log(doc.data())
        })
        res.json(data)
    })
})

// Get note from user
router.get("/note/:id", (req, res) => {
    database.collection("notes").doc(req.params.id).get().then((doc) => {
        console.log(doc.data())
        res.json(doc.data())
    })
})

// Add user to Database
router.post("/:user/createUser", (req, res) => {
    let data = req.body
    db.add(data.collection, data.user, data)
    res.status(200).send("DONE")
})

//Add Note to Database
router.post("/:user/createNote", (req, res) => {
    let data = req.body
    data.user = req.params.user
    db.add("notes", data.id, data)
    res.status(200).send("DONE")
})

// Delete note from database
router.get("/delete/:id", (req, res) => {
    db.delete("notes", req.params.id)
    res.status(200).send("DONE")
})

// Update Record on Database
router.post("/update/:id", (req, res) => {
    let data = req.body
    db.update("notes", req.params.id, data)
    res.status(200).send("DONE")
})

export default router