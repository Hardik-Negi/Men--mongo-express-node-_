const express = require("express");
const app = express();
const morgan = require("morgan");
const userModel = require("./models/user");
const dbConnection = require("./config/db");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.send("about page");
});

app.get("/profile", (req, res) => {
  res.send("Profile Page");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { userName, email, password } = req.body;

  const newUser = await userModel.create({
    userName: userName,
    email: email,
    password: password,
  });
  res.send(newUser);
});

app.post("/get-form-data", (req, res) => {
  console.log(req.body);
  res.send("data received");
});

app.get("/get-users", (req, res) => {
  userModel.find().then((users) => {
    res.send(users);
  });
});

app.get("/update-user",async (req, res) => {
 await userModel.findOneAndUpdate(
    {
      userName: "khushi",
    },
    {
      email: "hardik@gmail.com",
    })

    res.send("user update");
});

app.get('/delete-user',async(req,res)=>{
   await userModel.findOneAndDelete({
      userName:"khushi"
   })
   res.send('user deleted');
})

app.listen(3000);
