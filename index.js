const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
//const  multipart  =  require('connect-multiparty');
//const  multipartMiddleware  =  multipart({ uploadDir:  './uploads' });

const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;
  

const app = express();
const port = 3000;
  
/* MySQL Connection */
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: '6g_bricks'
});
  
/* Connect to MySQL */
db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL');
});

/* Middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());


const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 } // 1MB file size limit
}).single('file');



/* Routes */
app.get('/experiments', (req, res) => {
  db.query('SELECT * FROM experiments ORDER BY 1 DESC', (err, results) => {
    if (err) {
      res.status(500).send('Error fetching experiments');
      return;
    }
    res.json(results);
  });
});


app.get('/experiments/:filter', (req, res) => {
  const filter = req.params.filter;
  sql = `SELECT * FROM experiments WHERE name like '%${filter}%'`;
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send('Error fetching experiments');
      return;
    }
    res.json(results);
  });
});


app.put('/startExperiment/:id', (req, res) => {
  const experimentId = req.params.id;
  const status = 'Running'
  sql = `UPDATE experiments SET status = '${status}' WHERE id = ${experimentId}`;
  db.query(sql, err => {
    if (err) {
      res.status(500).send('Error updating experiment');
      return;
    }  
    db.query('SELECT * FROM experiments', (err, result) => {
      if (err) {
        res.status(500).send('Error fetching updated experiment');
        return;
      }
      res.json(result);
    });
  });
});

app.put('/endExperiment/:id', (req, res) => {
  const experimentId = req.params.id;
  const status = 'Stopped'
  sql = `UPDATE experiments SET status = '${status}' WHERE id = ${experimentId}`;
  db.query(sql, err => {
    if (err) {
      res.status(500).send('Error updating experiment');
      return;
    }
    db.query('SELECT * FROM experiments', (err, result) => {
      if (err) {
        res.status(500).send('Error fetching updated experiment');
        return;
      }
      res.json(result);
    });
  });
});

app.put('/scheduleExperiment/:id/:startdate/:enddate', (req, res) => {
  const experimentId = req.params.id;
  const startdate = req.params.startdate;
  const enddate = req.params.enddate;
  console.log('startdate: ' + startdate+ ' enddate: ' + enddate);
  
  sql = `UPDATE experiments SET startdate = '${startdate}', enddate = '${enddate}' WHERE id = ${experimentId}`;
  console.log(sql);
  db.query(sql, err => {
    if (err) {
      res.status(500).send('Error scheduling experiment');
      return;
    }  
    db.query('SELECT * FROM experiments', (err, result) => {
      if (err) {
        res.status(500).send('Error fetching updated experiment');
        return;
      }
      res.json(result);
    });
  });
});


app.post('/newexperiment', (req, res) => {
  const { name, startdate, enddate } = req.body;
  const status = 'Running'
  db.query('INSERT INTO experiments (name, status, startdate, enddate) VALUES (?, ?, ?, ?)', [name, status, startdate, enddate], (err, result) => {
    if (err) {
      res.status(500).send('Error creating experiment');
      return;
    }
    const experimentid = result.insertId;
    db.query('SELECT * FROM experiments WHERE id = ?', experimentid, (err, result) => {
      if (err) {
        res.status(500).send('Error fetching created experiment');
        return;
      }
      res.status(201).json(result[0]);
    });
  });
});


app.get('/editexperiment/:id', (req, res) => {
  const experimentid = req.params.id;
  db.query('SELECT * FROM experiments WHERE id = ?', experimentid, (err, result) => {
    if (err) {
      res.status(500).send('Error fetching experiment');
      return;
    }
    if (result.length === 0) {
      res.status(404).send('Experiment not found');
      return;
    }
    res.json(result[0]);
  });
});

   

app.put('/editexperiment/:id', (req, res) => {
  const experimentid = req.params.id;
  const { name, startdate, enddate } = req.body;
  const filename = 'filename'
  sql = `UPDATE experiments SET name = '${name}', filename = '${filename}' WHERE id = ${experimentid}`;
  console.log(sql);
  db.query(sql, err => {
    if (err) {
      console.log(err);
      res.status(500).send('Error updating experiment');
      return;
    }    
    console.log('sssss');
    db.query('SELECT * FROM experiments WHERE id = ?', experimentid, (err, result) => {
      if (err) {
        res.status(500).send('Error fetching updated experiment');
        return;
      }
      res.json(result[0]);
    });
  });
});

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
     if (err) {
       console.error(err);
       return res.status(500).json({ error: err });
      }
     if (!req.file) {
        return res.status(400).json({ error: 'Please send file' });
      }
      console.log(req.file);
      console.log('file');
      res.send('File uploaded!');
  });
});





app.get('/xapps', (req, res) => {
  db.query('SELECT * FROM xapps', (err, results) => {
    if (err) {
      res.status(500).send('Error fetching xapps');
      return;
    }
    res.json(results);
  });
});


app.get('/xapps/:filter', (req, res) => {
  const filter = req.params.filter;
  sql = `SELECT * FROM xapps WHERE name like '%${filter}%'`;
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send('Error fetching xapps');
      return;
    }
    res.json(results);
  });
});



app.put('/deleteXapp/:id', (req, res) => {
  const xappid = req.params.id;
  sql = `DELETE FROM xapps WHERE id = ${xappid}`;
  db.query(sql, err => {
    if (err) {
      res.status(500).send('Error deleting xApp');
      return;
    }  
    db.query('SELECT * FROM xapps', (err, result) => {
      if (err) {
        res.status(500).send('Error fetching xapps');
        return;
      }
      res.json(result);
    });
  });
});


app.post('/newxapp', (req, res) => {
  const { name, description, status } = req.body;
  db.query('INSERT INTO xapps (name, description, status) VALUES (?, ?, ?)', [name, description, status], (err, result) => {
    if (err) {
      res.status(500).send('Error creating xapp');
      return;
    }
    const xappid = result.insertId;
    db.query('SELECT * FROM xapps WHERE id = ?', xappid, (err, result) => {
      if (err) {
        res.status(500).send('Error fetching created xapp');
        return;
      }
      res.status(201).json(result[0]);
    });
  });
});


app.get('/editxapp/:id', (req, res) => {
  const xappid = req.params.id;
  db.query('SELECT * FROM xapps WHERE id = ?', xappid, (err, result) => {
    if (err) {
      res.status(500).send('Error fetching xApp');
      return;
    }
    if (result.length === 0) {
      res.status(404).send('xApp not found');
      return;
    }
    res.json(result[0]);
  });
});
   

app.put('/editxapp/:id', (req, res) => {
  const xappid = req.params.id;
  const { name, description, status } = req.body;
  db.query('UPDATE xapps SET name = ?, description = ?, status = ? WHERE id = ?', [name, description, status, xappid], err => {
    if (err) {
      res.status(500).send('Error updating xApp');
      return;
    }
    db.query('SELECT * FROM xapps WHERE id = ?', xappid, (err, result) => {
      if (err) {
        res.status(500).send('Error fetching updated xApp');
        return;
      }
      res.json(result[0]);
    });
  });
});

  
/* Start server */
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});