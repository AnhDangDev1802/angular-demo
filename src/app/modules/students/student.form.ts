import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Student} from "./student.model";
export class StudentForm extends FormGroup {
    constructor(student:Student) {
        // params của FormGroup là controls dạng object, nên hàm super mình để vào object trống cũng được
        super({});

        // key => property name cua student model
        for (let key in student) {
            this.addControl(key, new FormControl(student[key]))
        }

        this.addValidator();
    }

    private addValidator() {
        this.controls['displayName'].setValidators(Validators.required);
        this.controls['age'].setValidators([Validators.required, Validators.min(15), Validators.max(20)]);
        this.controls['address'].setValidators(Validators.required);
        this.controls['gender'].setValidators(Validators.required)
    }

    getObject() {
        let student = new Student();
        student.setObject(this.value);
        return student;
    }
}