const express =require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
const hbs = require('hbs');



//public static path

const static_path = path.join(__dirname, "../public");

const template_path = path.join(__dirname, "../src/templates/views");
const partials_path = path.join(__dirname, "../src/templates/partials");
// console.log(static_path);

app.set('view engine', 'hbs');

app.set('views',template_path);
hbs.registerPartials(partials_path);
//static wala tarika se kar rhe hai


app.use(express.static(static_path));




app.get('/', (req, res) => {

    //res.send("hello from the express");
    res.render('index');
}
);

app.get ('/about', (req, res) => {
    // res.send("hello from the about side");

    res.render('about');
}
);


app.get('/weather', (req, res) => {
    //res.send("hello from the weather side");
    res.render('weather');
}
);

app.get('*' , (req, res) => {
    //res.send("404 error page oops");
    res.render('404error');
}
);




app.listen(port, () => {
    console.log("listening to the port 8000");
}
);
