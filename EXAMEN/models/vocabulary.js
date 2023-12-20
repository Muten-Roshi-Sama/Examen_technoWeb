import Model from './model.js';

export default class Vocabulary extends Model {

    static table = "vocabulary_db.voca";  //dataBase.Table
    //static table_translation = "vocabulary_db.translation"; //dataBase.Table
    static primary = ["id"];
}
