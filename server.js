// const express = require("express");
// const path = require("path");
// const compression = require("compression");

// const PORT = process.env.PORT ||  3000;

// const app = express();

// app.use(compression());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("/public/"));

// app.use(express.static(path.join(__dirname, "/build/")));
// app.get("/", function (req, res) {
// 	res.sendFile(path.join(__dirname, "/build", "index.html"));
// });

// app.connect(process.env.PORT, {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
// });

const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000; 
app.use(express.static(path.join(__dirname, "build")));
app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});