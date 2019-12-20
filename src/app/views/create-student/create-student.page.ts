import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../services/student.service';
import {Student} from '../../models/Student';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.page.html',
  styleUrls: ['./create-student.page.scss'],
})
export class CreateStudentPage implements OnInit {

    student: Student = new Student();

    constructor(
        private studentService: StudentService
    ) {}

    ngOnInit() {
        this.student.phones = [{description: '', number: ''}];
    }

    async addStudent() {
        await this.studentService.addNewStudent(this.student).toPromise();
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
}
