import express from 'express';
const app = express();

app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());

// Rotas
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Home'
  });
});

app.listen(3000);
