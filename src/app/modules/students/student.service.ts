import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Student} from "./student.model";
import {Observable} from "rxjs/Rx";
@Injectable()
export class StudentService {
    constructor(private http:HttpClient) {
    }

    getStudents():Observable<Array<Student>> {
        try {
            // body is array student from /assets/data.json
            return this.http.get('/assets/data.json').map((body:any)=> {
                return body.map((item)=> {
                    let student = new Student();
                    student.setObject(item);
                    return student;
                });
            })
        } catch (e) {
            return Observable.of(null);
        }
    }
}