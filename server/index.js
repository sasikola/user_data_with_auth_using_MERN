const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/User");
const authRouter = require("./Router/authRouter");

const app = express();
<<<<<<< HEAD
app.use(
  cors({
    origin: ["https://user-mern-client.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
=======
app.use(cors({
   origin:["https://deploy-mern-1whq.vercel.app"],
  methods:["POST", "GET"],
  credentials:true
}));
>>>>>>> 370cc8ad82f1c35b85fd1f3a309e55d59b6ea1ed
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://sasikola5:Sasikiran9010@cluster0.bjoek5y.mongodb.net/UserList?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected successfully");
  })
  .catch((err) => {
    console.error(`Error: ${err}`);
  });

app.use("/api/auth", authRouter);

// get all users
app.get("/getData", (req, res) => {
  userModel
    .find()
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

// get single user
app.get("/getUser/:id", (req, res) => {
  let id = req.params.id;
  userModel
    .findById(id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    })
    .catch((err) => {
      res.status(500).json({ err: "Error retriving user" });
    });
});

// to create a user
app.post("/create", (req, res) => {
  userModel
    .create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

// to delete a user
app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findByIdAndDelete({ _id: id })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

// to update a user
app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findByIdAndUpdate(
      { _id: id },
      {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
      }
    )
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
