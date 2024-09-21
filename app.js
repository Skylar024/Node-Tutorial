const express = require('express');
const morgan = require('morgan');


//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(3000);

//middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));


app.get('/', (req, res) => {
    //res.send('<p>Home Page</p>');
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem1'},
        {title: 'Mario finds stars', snippet: 'Lorem2'},
        {title: 'How to defeat bowser', snippet: 'Lorem3'},
    ];
    
    res.render('index', { title: 'Home', blogs});
});


app.get('/about', (req, res) => {
    //res.send('<p>About Page</p>');
    res.render('about', { title: 'About Us'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a Blog'});
})

//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
});