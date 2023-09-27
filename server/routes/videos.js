const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');
const app = express();


router.get('/getAllVideos', (req, res) => {
    // Récupérer toutes les données de la table "test"
    db.all('SELECT * FROM videos', (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows);
    });
  });
  
module.exports = router;