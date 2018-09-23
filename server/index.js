const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.99.100:32768/reactblog');

const app = express();
const { User } = require('./models');

app.get('/users', (req, res) => {
  User.find().then((users) => {
    res.send(users);
  });  
});

app.get('/users/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.send(user);
    })
    .catch((error) => {
      res.send('no such user!');
    });
});

app.listen(8888);