import express from 'express'

let articlesInfo = [{
  name: 'learn-react',
  upvotes: 0,
}, {
  name: 'learn-node',
  upvotes: 0,
}, {
  name: 'mongodb',
  upvotes:0
}]

const app = express()
app.use(express.json())

app.put('/api/articles/:name/upvote', (req, res) => {
  
})

app.listen(8000, ()=> {
  console.log('Server is listening on port 8000');
})