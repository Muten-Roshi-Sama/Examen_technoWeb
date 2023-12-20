import Model from './model.js';

export default class Translation extends Model {

    //static table_voca = "vocabulary_db.voca";  //dataBase.Table
    static table = "vocabulary_db.translation"; //dataBase.Table
    static primary = ["id"];
}