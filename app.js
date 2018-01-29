const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const jsonParser = bodyParser.json();
const model = require('./models/index');

app.use( bodyParser.urlencoded( {extended:true} ));
app.use( bodyParser.json() );

const Sequelize = require('sequelize');
const sequelize = new Sequelize('node_project', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true
    },

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(__dirname + "/views"));

app.get('/form', function (req, res) {
    res.render('form.html');
});

app.post('/form', function (req, res) {
    const {
        title,
        activity,
        characteristics,
        geography,
        consumer,
        competitor,
        task,
        type,
        type_other,
        section,
        section_other,
        frequency,
        language,
        language_other,
        content,
        impression,
        message,
        style,
        style_other,
        result_vision,
        result_action,
        result_feeling,
        colour,
        component,
        component_other,
        advertisement,
        counter,
        duration,
        duration_other,
        scenario1,
        scenario2,
        scenario3,
        note
    } = req.body;
    model.Company.create({ //Почему не видит модель?
        title: title,
        activity: activity,
        characteristics: characteristics,
        geography: geography,
        consumer: consumer,
        competitor: competitor,
        task: task,
        type: JSON.stringify(type),
        type_other: JSON.stringify(type_other),
        section: JSON.stringify(section),
        section_other: JSON.stringify(section_other),
        frequency: frequency,
        language: JSON.stringify(language),
        language_other: JSON.stringify(language_other),
        content: content,
        impression: impression,
        message: message,
        style: JSON.stringify(style),
        style_other: JSON.stringify(style_other),
        result_vision: JSON.stringify(result_vision),
        result_action: JSON.stringify(result_action),
        result_feeling: JSON.stringify(result_feeling),
        colour: colour,
        component: JSON.stringify(component),
        component_other: JSON.stringify(component_other),
        advertisement: advertisement,
        counter: counter,
        duration: JSON.stringify(duration),
        duration_other: JSON.stringify(duration_other),
        scenario1: scenario1,
        scenario2: scenario2,
        scenario3: scenario3,
        note: note,

    })
        .then(todo => res.status(201).json({
            error: false,
            data: todo,
            message: 'New company profile has been created.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
    // res.send(req.body);
});

app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});