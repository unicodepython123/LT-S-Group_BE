import express from 'express'
import fs from 'fs'
import { parse } from 'path'
const app = express()
const port = 3000

let users = [
    {
        id: 1,
        name: 'Quang',
        age: 18
    },
    {
        id: 2,
        name: "Hoàng",
        age: 20
    },
    {
        id: 3,
        name: "Ngọc",
        age: 22
    }
]

app.get('/', (req,res) => {
    res.send(users)
})

app.get('/users/:id', (req,res) => {
    let id_index = parseInt(req.params.id)
    let user_index = users.findIndex(user => user.id === id_index)
    if (user_index != -1) {
        res.send(users[user_index])
    }
})

app.post('/users/create', (req,res) => {
    let new_user = req.body
    req.body.id = users.length + 1
    users.push(new_user)
    res.send(users)
})

app.put('/users/update', (req,res) => {
    let id_index = parseInt(req.body.id)
    let user_index = users.findIndex(user => user.id === id_index)
    if (user_index != -1) {
        users[user_index].id = re.body.id
        users[user_index].name = re.body.name
        users[user_index].age = re.body.age
    }
    res.send(users)
})

app.delete('/users/delete', (req,res) => {
    let id_index = parseInt(req.body.id)
    let user_index = users.findIndex(user => user.id === req.body.id)
    if (user_index != -1) {
        users.splice(user_index, 1)
    }
    res.send(users)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})