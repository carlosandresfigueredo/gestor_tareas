require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,
});

db.connect((err) => {
  if (err) {
    console.log("❌ Error conexión:", err);
  } else {
    console.log("✅ Conectado a MySQL");
  }
});

// GET FILTRADO POR USUARIO
app.get("/tareas", (req, res) => {
  const { idUsuario } = req.query;

  let sql = "SELECT * FROM tareas";
  let params = [];

  if (idUsuario) {
    sql = "SELECT * FROM tareas WHERE idUsuario = ?";
    params = [idUsuario];
  }

  db.query(sql, params, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

//  POST
app.post("/tareas", (req, res) => {
  const { id, titulo, resumen, expira, idUsuario, completada } = req.body;

  const sql = `
    INSERT INTO tareas (id, titulo, resumen, expira, idUsuario, completada)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [id, titulo, resumen, expira, idUsuario, completada],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ mensaje: "Tarea creada" });
    },
  );
});

//  COMPLETAR
app.put("/tareas/:id", (req, res) => {
  const { id } = req.params;

  const sql = "UPDATE tareas SET completada = 1 WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ mensaje: "Tarea completada" });
  });
});

// ELIMINAR
app.delete("/tareas/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM tareas WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ mensaje: "Tarea eliminada" });
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor corriendo");
});
