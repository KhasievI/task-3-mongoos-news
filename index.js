const mongoose = require('mongoose')
const express = require('express')

const app = express()
port = 3007
app.use(express.json())


mongoose.connect("mongodb+srv://khasiev:malsy1999@cluster0.yzc6knt.mongodb.net/Task3")
.then(() => console.log('Успешно соединились с сервером MongoDB'))
.catch(() => console.log('Ошибка при соединении с сервером MongoDB'))


app.listen(port, () => {
    console.log('conected');
})

app.use(require('./routes/news.route'))
app.use(require('./routes/category.route'))
app.use(require('./routes/comment.route'))