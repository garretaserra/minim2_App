import { Component, OnInit } from '@angular/core';
import {Student} from '../../models/Student';
import {StudentService} from '../../services/student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {

    allStudents: Student[];
    shownStudents: Student[];

    constructor(
        private studentService: StudentService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    async ionViewWillEnter(){
        this.allStudents = await this.studentService.getStudents().toPromise();
        await this.changeDegree({detail:{value: 'all'}});
    }

    async goToStudent(student: Student) {
        await this.router.navigateByUrl('/student/'+student._id);
    }

    changeDegree(event) {
        let degree = event.detail.value;
        if(degree==='all'){
            this.shownStudents = this.allStudents;
        }
        else {
            this.shownStudents = [];
            this.allStudents.forEach(student => {
                for (let i = 0; i < student.degrees.length; i++) {
                    if (student.degrees[i] == degree) {
                        this.shownStudents.push(student);
                        break;
                    }
                }
            })
        }
    }
}
