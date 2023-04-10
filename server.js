const mongoose = require("mongoose");

const app = require("./app");

mongoose.set("strictQuery", true);

const DB_HOST =
  "mongodb+srv://Ihor:n28_tCGjh3aiFLc@cluster0.jiutxae.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
