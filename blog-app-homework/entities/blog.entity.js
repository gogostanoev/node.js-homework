import {v4 as uuidv4} from "uuid";
import moment from "moment";

// I create a class called Blog which will have 6 properties that will help me define the task I need to do
export class Blog {
    constructor(title, body, author, date, tags){
        this.id = uuidv4();
        this.title = title;
        this.body = body;
        this.author = author;
        this.date = moment().format('MMMM Do YYYY, h:mm:ss a');
        this.tags = tags
    };
};
