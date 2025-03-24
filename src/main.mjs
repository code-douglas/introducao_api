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

app.post('/createproduct', (req, res) => {
  const { name, price } = req.body;

  console.log(name, price);

  // Validações
  if(!name) {
    res.status(422).json({
      message: 'O campo nome é obrigatório!'
    });

    return;
  }

  res.status(200).json({
    message: `O produto: ${name} foi criado com sucesso.`
  });
});

app.listen(3000);
