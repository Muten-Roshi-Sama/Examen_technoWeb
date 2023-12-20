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
    // const transList = await Translation.loadMany();
    // const randomVoc = vocaList.id[Math.random(vocaList.length)]
    const randomVal = Math.floor(Math.random() * vocaList.length)
    const randomVoc = vocaList[randomVal].mot;
    let answer = {"answer": req.body.answer}
    // if (answer == transList[randomVal]){
    // }
    console.table(vocaList);
    // console.table(transList);
    res.render("home.ejs", {voca:vocaList, translation:[], randomVoc:randomVoc});
});


app.post('/add', async (req, res) => {
    let newVoc = {"mot" : req.body.Word,
                    "traduction" : req.body.Translation};
    const mot = new Vocabulary();
    mot.update(newVoc);
    await mot.save(); 
    res.redirect("/");   
});





//--------------Server Start-------------------------------------
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});