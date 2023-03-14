const app = reqire('./app')

const port = 8000;
app.listen(port, () => {
  console.log('App running on port  ${port}...');
})