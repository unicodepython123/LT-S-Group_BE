// npm là một Package manager thông dụng của nodejs
// package manager (cụ thể là npm) cung cấp những câu lệnh có sẵn để quản lý các
// version của các gói package

// sau khi "npm install" nó tạo ra file package.json chứa thông tin định nghĩa các
// thư viện được sử dụng

// sau khi chúng ta npm install express thì tạo ra file package-lock.json chưa thông tin
// các module có trong framework express

// Module của thư viện express sẽ được định nghĩa trong dependencies, giúp các lập trình viên
// có thể install lại module để sử dụng khi clone từ các repo trực tuyến (khi khi up code lên thì nó không ip node_modules)

// thêm framework express vào trong chương trình
// gán biến express để lưu trử dữ liệu
// thư viên express là một trong những thư viện có trong framework expressjs
const express = require('express')
// sử dụng biến express như 1 lời gọi hàm
// kết quả là một đối tượng đại diện cho phần mềm bạn đang lập trình
// dùng biến app để lưu trữ lại đối tượng này
const app = express()
// cổng
const port = 3000
 
// vì app là một đối tượng nên có thể . các phương thức
// get      --> Read
// post     --> Create
// put      --> Update
// delete   --> Delete
// ...

// cả dòng lên app.get('/', (req, res) => {res.đen("Hello World")}) là một routine
// app.METHOD(PATH, HANDLER)
// app là một thế hiện của một express() 
// METHOD là một request mmethod http
// path là một path on server (đường dẫn đến server)
// handler là một function
// nếu đúng path thì sẽ gọi lài function
// URL tồn tại duy nhất thì gọi là URI 

// Đối với function có sẽ nhận tối đa 4 đối số
// Đối số 1 (request)   --> Chứa những thông tin mà client gửi lên server
// --> Dựa vào thông tin đó thì handler mới biết cần xử lý cái gì?
// Đối số 2 (response)  --> Chứa những thông tin mà server gửi về cho client
// --> Sau khi xử lý thì sẽ lưu thông tin vào response và được trả về 
// (chúng ta có thể tùy chỉnh dữ liệu trả về theo trường hợp)
// req và res là 2 object

// cấu trúc của 1 query params
// /abc?abcrfr=ef&rfhru=rfurh

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


// Khi tạo 1 routine --> Đang tạo 1 API cho người dùng có thể sử dựng
// Phần get, post, put, delete là phương thức được sử dụng
// Phần url (uri nếu url tồn tại duy nhất) là đường dẫn của API
// Phần function (handler) là phần tử lý, trong phần handler ta sẽ quy định
// 1. Xử lý logic như thế nào
// 2. Phần header được cấu hình như thế nào, cần đảm bảo những thông tin gì
// 3. Phần body được cấu hình như thế nào, cần những thông tin gì cho xử lý logic

// API 1: lấy tất cả user
app.get('/users',(req,res) => { 
  console.log("API lấy thông tin tất cả") 
  console.log(users)
})

// API 2: lấy chi tiết user
app.get('/users/:id', (req,res) => {
    for (let i = 0; i < users.length; i = i + 1) {
      if (req.params.id == users[i].id) {
        console.log('API lấy thông tin chi tiết')
        console.log(users[i])
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
})

// API 4: cập nhật thông tin user
app.put('/users/update/:id', (req,res) => {
  const userId = parseInt(req.params.id)
  // truyền thông tin update vào body (object) --> gán lại cho updateUser
  const updatedUser = req.body
  const index = users.findIndex(u => u.id === userId)
  // js trả về -1 nếu phần tử không tồn tại
  if (index !== -1) {
    users[index] = updatedUser
    console.log(`Đã cập nhật user có id ${userId}`)
  }
})

// API 5: xóa một phần tử trong user
app.delete('/users/delete/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === userId);
  if (index !== -1) {
    users.splice(index, 1)
    console.log(`Đã xóa user có id ${userId}`)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

