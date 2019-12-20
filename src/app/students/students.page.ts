import { Component, OnInit } from '@angular/core';
import {Student} from '../models/Student';
import {StudentService} from '../services/student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {

    students: Student[];

    constructor(
        private studentService: StudentService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    async ionViewWillEnter(){
        this.students = await this.studentService.getStudents().toPromise();
    }

    async goToStudent(student: Student) {
        await this.router.navigateByUrl('/student/'+student._id);
    }
}
