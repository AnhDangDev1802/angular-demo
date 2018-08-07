import {Component, OnInit, OnDestroy} from '@angular/core';
import {StudentService} from "../student.service";
import {Subscription} from "rxjs/Rx";
import {Student} from "../student.model";
import {StudentForm} from "../student.form";
import {FormControl, AbstractControl} from "@angular/forms/forms";

declare const jQuery:any;

@Component({
    selector: 'student-list',
    templateUrl: 'student-list.component.html'
})
export class StudentListComponent implements OnInit, OnDestroy {

    studentForm = new StudentForm(new Student());
    students:Array<Student> = [];

    subscription = new Subscription();

    constructor(private studentService:StudentService) {
    }

    ngOnInit() {
        const studentListSub = this.studentService.getStudents().subscribe((students)=> {
            this.students = students
        });
        this.subscription.add(studentListSub);
    }


    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    openModalCreate() {
        jQuery('#createModal').modal();
    }

    createStudent() {
        if (this.studentForm.valid) {
            let student = this.studentForm.getObject();
            student.id = this.students.length;
            this.students.push(student);

            jQuery('#createModal').modal('close');
        } else {
            //  nếu form không hợp lệ thì  check lại tất cả control
            for (let key in this.studentForm.controls) {
                this.studentForm.controls[key].markAsDirty();
            }
        }
    }
}