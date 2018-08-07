import {NgModule} from '@angular/core';
import {StudentRouting} from "./student.routing";
import {StudentListComponent} from "./student-list/student-list.component";
import {StudentService} from "./student.service";
import {CoreModule} from "../core/core.module";

@NgModule({
    imports: [
        CoreModule,
        StudentRouting
    ],
    exports: [],
    declarations: [
        StudentListComponent
    ],
    providers: [
        StudentService
    ],
})
export class StudentModule {
}
