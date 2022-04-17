import { app } from './app';

const port = 3333
app.listen(port, ()=>{
  console.log(`HTTP server Running http://localhost:${port}`)
})