const dbcon = require("./dbconfig");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

//Resolve the CORS issue
app.use(cors());

//Middleware for accessing body
app.use(express.json());

//CREATE API
app.post("/api/students/new", (req, res) => {
  dbcon.query(
    "INSERT INTO STUDENTS(name, email, gender, marks) values(?, ?, ?, ?)",
    [req.body.name, req.body.email, req.body.gender, req.body.marks],
    (error, result) => {
      if (error) {
        res.send(error);
      } else {
        res.send(result);
      }
    }
  );
});

//READ API
app.get("/api/students", (req, res) => {
  dbcon.query("SELECT * FROM STUDENTS", (error, result) => {
    if (error) {
      res.send(error);
    } else {
      res.send(result);
    }
  });
});

//UPDATE API
app.put("/api/students/:id", (req, res) => {
  dbcon.query(
    `UPDATE STUDENTS SET name=?, email=?, gender=?, marks=? where rno=${req.params.id}`,
    [req.body.name, req.body.email, req.body.gender, req.body.marks],
    (error, result) => {
      if (error) {
        res.send(error);
      } else {
        res.send(result);
      }
    }
  );
});

//DELETE API
app.delete("/api/students/:id", (req, res) => {
  dbcon.query(
    `DELETE FROM STUDENTS WHERE rno=${req.params.id}`,
    (error, result) => {
      if (error) {
        res.send(error);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
