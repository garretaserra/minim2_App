import { Component, OnInit } from '@angular/core';
import {Student} from '../../models/Student';
import {StudentService} from '../../services/student.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

    student: Student;

    constructor(
        private studentService: StudentService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
    }

    async ionViewWillEnter(){
        let id = this.route.snapshot.paramMap.get('id');
        this.student = await this.studentService.getStudent(id).toPromise();
    }

    async deleteStudent(){
        await this.studentService.deleteStudent(this.student._id).toPromise();
    }

}
