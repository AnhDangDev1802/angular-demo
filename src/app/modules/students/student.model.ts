import {Model} from "../core/core.model";
export class Student extends Model {
    constructor(public id?:number,
                public displayName?:string,
                public age?:number,
                public address?:string,
                public gender?:string) {

        // nhớ phải gọi hàm super vì nó kế thừa từ thằng Model
        // nếu Model có param thì hàm super truyền vào param y chang thằng cha nó (nếu ko có gì thì thôi)
        super();
    }
}