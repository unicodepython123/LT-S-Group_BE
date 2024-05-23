const express = require('express')
const app = express()
const port = 3000
let users = [
  {
    id: 1,
    name: "Quang",
    age: 21
  },
  {
    id: 2,
    name: 'Tuấn',
    age: 20,
  },
  {
    id: 3,
    name: 'Huyền',
    age: 21
  }
]


app.use(express.urlencoded())     
app.use(express.json())           

// API 1: lấy tất cả user
app.get('/users',(req,res) => { 
  console.log("API lấy thông tin tất cả") 
  res.send(users)
})

// API 2: lấy chi tiết user
app.get('/users/:id', (req,res) => {
    for (let i = 0; i < users.length; i = i + 1) {
      if (req.params.id == users[i].id) {
        console.log('API lấy thông tin chi tiết')
        res.send(users[i])
      }
    }  
})

// API 3: tạo user mới
app.post('/users/add', (req,res) => {
  // gán lại thông tin cho newuser
  let newuser = {
    id: req.body.id,
    name: req.body.name,
    age: req.body.age
  }
  users.push(newuser)
  console.log("Đã thêm user")
  res.send(req.body)
})

// API 4: cập nhật thông tin user
app.put('/users/update/:id', (req,res) => {
  const userId = parseInt(req.params.id)
  const updatedUser = req.body
  const index = users.findIndex(u => u.id === userId)
  if (index !== -1) {
    users[index] = updatedUser
    console.log(`Đã cập nhật user có id ${userId}`)
    res.send(req.body)
  }
})

// API 5: xóa một phần tử trong user
app.delete('/users/delete/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === userId);
  if (index !== -1) {
    users.splice(index, 1)
    console.log(`Đã xóa user có id ${userId}`)
    res.send(users)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

