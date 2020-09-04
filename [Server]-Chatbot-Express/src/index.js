const express = require("express");
const cors = require("cors");
const addUserDatabase = require("./db.add.user");
const checkUsesrDatabase = require("./db.check.user");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/adduser", async (req, res) => {

    try {
        const input = req.query;
        await addUserDatabase.addUser(input);
        res.json({ message: "Success" });
    }
    catch (err) {
        console.log(err);
        res.json({ message: "Failure" });
    }
});

app.post("/adduser", async (req, res) => {
    try {
        const input = req.body;
        await addUserDatabase.addUser(input);
        res.json({ message: "Success" });
    }
    catch (err) {
        console.log(err);
        res.json({ message: "Failure" });
    }
})

app.post("/checkuser", async (req, res) => {
    try {
        const input = req.body;
        let user = await checkUsesrDatabase.checkUser(input);
        console.log(user)
        res.json(user);
    }
    catch (err) {
        console.log(err);
        res.json({ message: "Failure" });
    }
})



app.listen(3000);
