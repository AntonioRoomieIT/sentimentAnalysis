import express from 'express'
const app = express()
const PORT=8080;
const index_dir='src';

app.use(express.static(index_dir));
app.listen(PORT)