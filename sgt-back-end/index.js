const express = require('express');

const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades";
  `;

  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'Sorry! An enxepected error occurred :('
      });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const { name = null, course = null } = req.body;
  const score = Number(req.body.score);
  if (!name || !course || !score || !Number.isInteger(score) || score > 100 || score < 0) {
    res.status(400).json({
      error: 'Valid grades need a: name, course, and score (integer from 0 to 100) :('
    });
  } else {
    const sql = `
      insert into "grades" ("name", "course", "score")
           values ($1, $2, $3)
        returning *;
    `;

    const params = [name, course, score];

    db.query(sql, params)
      .then(result => {
        res.status(201).json(
          result.rows[0]
        );
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'Sorry! An enxepected error occurred :('
        });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const { name = null, course = null } = req.body;
  const score = Number(req.body.score);
  if (!Number.isInteger(gradeId) || gradeId < 1) {
    res.status(400).json({
      error: 'gradeId must be a positive integer :('
    });
  } else if (!name || !course || !score || !Number.isInteger(score) || score > 100 || score < 0) {
    res.status(400).json({
      error: 'Valid grades need a: name, course, and score (integer from 0 to 100) :('
    });
  } else {
    const sql = `
      update "grades"
         set "name" = $1,
             "course" = $2,
             "score" = $3
       where "gradeId" = $4
      returning *;
    `;

    const params = [name, course, score, gradeId];

    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({
            error: `Cannot find grade ${gradeId}`
          });
        } else {
          res.status(200).json(result.rows[0]);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'Sorry! An enxepected error occurred :('
        });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000! ahahah');
});
