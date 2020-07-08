import db from "../firebase/init.js"

function createDatabase() {
    let database = {
        collection: null,

        start() {
            console.log("[DATABASE] => Started.")
        },

        async getNote(collection, id) {
            return await db.collection(collection).doc(id)
        },

        getAllNotes(collection) {
            db.collection(collection).get().then((docs) => {
                return docs
            })
        },

        add(collection, id, data) {
            if(id) {
                db.collection(collection).doc(id).set(data).then(() => {
                    console.log("[DATABASE] => Added " + data + " to database.")
                })
            }
            else {
                db.collection(collection).add(data).then(() => {
                    console.log("[DATABASE] => Added " + data + " to database.")
                })
            }
        },

        update(collection, id, data) {
            db.collection(collection).doc(id).update(data).then(() => {
                console.log("[DATABASE] => Updated " + id + " in database.")
            })
        },

        delete(collection, id) {
            db.collection(collection).doc(id).delete().then(() => {
                console.log("[DATABASE] => Deleted " + id + ".")
            })
        }
    }

    return database
}

export default createDatabase