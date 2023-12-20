const PORT = 8000;
import express from 'express';

import Vocabulary from './models/vocabulary.js';
// import Translation from './models/translation.js';

let app = express();
//Body parser
app.use(express.urlencoded({extended : true}));  //to use .body
app.use(express.static('public')); //to use files in the public folder like css


app.get('/', async (req, res)=> {
    const vocaList = await Vocabulary.loadMany();
    const randomVal = Math.floor(Math.random() * vocaList.length)
    const randomVoc = vocaList[randomVal].mot;
    let Msg = {"Msg": req.body.Msg};
    console.table(vocaList);
    // console.table(transList);
    // res.render("home.ejs", {vocaList:vocaList, randomVoc:randomVoc});
    res.render("home.ejs", {vocaList, randomVoc, Msg});

    
    // res.redirect("/");  
});


app.post('/add', async (req, res) => {
    let newVoc = {"mot" : req.body.Word,
                    "traduction" : req.body.Translation};
    const mot = new Vocabulary();
    mot.update(newVoc);
    await mot.save(); 
    res.redirect("/");   
});

app.post('/saveAnswer', async (req, res) => {
    const vocaList = await Vocabulary.loadMany();
    const randomVal = Math.floor(Math.random() * vocaList.length)
    let answer = req.body.answer;
    // let Msg = req.body.Msg;


    if (answer == vocaList[randomVal].traduction){
        req.body.Msg="Good answer!";
    }
    else {
        req.body.Msg="Bad answer!";
    }
    res.redirect("/");   
});



//--------------Server Start-------------------------------------
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});