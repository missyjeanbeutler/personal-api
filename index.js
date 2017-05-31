const express = require('express'),
      bodyParser = require('body-parser'),
      user = require('./user.js'),
      middleware = require('./controllers/middleware.js'),
      mainCtrl = require('./controllers/mainCtrl.js')

const app = express(),
      port = 3002

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(middleware.addHeaders);

//--------------read-------------------//

app.get('/name', mainCtrl.getName)
app.get('/location', mainCtrl.getLocation)
app.get('/occupations', mainCtrl.getOccupations)
app.get('/occupations/latest', mainCtrl.getOccupationsLatest)
app.get('/hobbies', mainCtrl.getHobbies)
app.get('/hobbies/:type', mainCtrl.getHobbyType)
app.get('/family', mainCtrl.getFamily)
app.get('/family/:gender', mainCtrl.getFamilyGender)
app.get('/restaurants', mainCtrl.getRestaurants)
app.get('/restaurants/:name', mainCtrl.getRestaurantName)
app.get('/skillz', mainCtrl.getSkillz)
app.get('/secrets/:username/:id', middleware.verifyUser, mainCtrl.getSecrets)

//-------------------write------------------//

app.put('/name', mainCtrl.putName);
app.put('/location', mainCtrl.putLocation);
app.post('/hobbies', mainCtrl.postHobby);
app.post('/occupations', mainCtrl.postOccupations);
app.post('/family', mainCtrl.postFamily);
app.post('/restaurants', mainCtrl.postRestaurants);
app.post('/skillz', middleware.generateId, mainCtrl.postSkillz);



app.listen(port, () => `Listening on port ${port}`)