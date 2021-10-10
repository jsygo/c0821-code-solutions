const data = require('./data.json');

app.use(express.json());

app.post('api/notes', (req, res, next) => {
  if (!req.body.content) {
    const badRequest = {
      error: 'content is a require field'
    };

    res.status(400).json(badRequest);
  } else {
    next();
  }
});

app.post('/api/note', (req, res) => {

});
