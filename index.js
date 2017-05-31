const express = require('express'),
      bodyParser = require('body-parser'),
      user = require('./user.js'),
      middleware = require('./controllers/middleware.js'),
      mainCtrl = require('./controllers/mainCtrl.js')

const app = express(),
      port = 3002

app.use(bodyParser.json())
app.use(middleware.addHeaders)

app.get('/name', mainCtrl.getName)




app.listen(port, () => `Listening on port ${port}`)