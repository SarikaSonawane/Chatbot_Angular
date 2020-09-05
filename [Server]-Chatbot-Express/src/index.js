const express = require("express");
const cors = require("cors");
const addUserDatabase = require("./db.add.user");
const checkUsesrDatabase = require("./db.check.user");
const forgotPassword = require("./db.user.forgotpass");

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
        console.log(input);
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
        if (user.length > 0) {
            console.log(user[0])
            res.json(user[0]);
        }
        else {
            res.json({ message: "Failure" });
        }
    }
    catch (err) {
        console.log(err);
        res.json({ message: "Failure" });
    }
})


app.post("/forgotpass", async (req, res) => {
    try {
        const input = req.body;
        let user = await forgotPassword.forgotPassword(input);

        res.json({ message: "Success" });

    }
    catch (err) {
        console.log(err);
        res.json({ message: "Failure" });
    }
})



app.listen(3000);
