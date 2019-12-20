import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../services/student.service';
import {Student} from '../../models/Student';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.page.html',
  styleUrls: ['./create-student.page.scss'],
})
export class CreateStudentPage implements OnInit {

    student: Student = new Student();

    constructor(
        private router: Router,
        private studentService: StudentService
    ) {}

    ngOnInit() {
        this.student.phones = [{description: '', number: ''}];
        this.student.degrees = [];
    }

    async addStudent() {
        await this.studentService.addNewStudent(this.student).toPromise();
        await this.router.navigateByUrl('/home');
    }

    async addPhone(){
        this.student.phones.push({description: '', number: ''})
    }

    deleteSubject(phone) {
        for(let i = 0; i < this.student.phones.length; i++){
            if(this.student.phones[i] == phone){
                this.student.phones.splice(i, 1);
                return;
            }
        }
    }

    addDegree(event) {
        console.log(event);
        event.detail.value.forEach(val=>{
            this.student.degrees.push(val);
        });
    }
}
