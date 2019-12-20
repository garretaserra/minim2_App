import { Component, OnInit } from '@angular/core';
import {SubjectService} from '../../services/subject.service';
import {Subject} from '../../models/Subject';
import {ActivatedRoute, Router} from '@angular/router';
import {Student} from '../../models/Student';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
})
export class SubjectPage implements OnInit {

    subject: Subject;
    nonEnrolledStudents: Student[]; //Students that are not enrolled in the subject

    constructor(
        private subjectService: SubjectService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
    }

    async ionViewWillEnter(){
      this.updateStudents();
    }

    async updateStudents(){
        let id = this.route.snapshot.paramMap.get('id');
        this.subject = await this.subjectService.getSubjectFromId(id).toPromise();
        this.nonEnrolledStudents = await this.subjectService.getStudentsNotEnrolled(this.subject.name).toPromise();
    }

    async gotoStudent(student){
        await this.router.navigateByUrl('/student/'+student._id);
    }

    async enrollStudents(event) {
        await event.detail.value.forEach(async val=>{
            await this.subjectService.enrollStudent(this.subject.name, val).toPromise();
            await this.updateStudents();
        });
    }

    async dropSubject(student){
        await this.subjectService.dropSubject(this.subject.name, student.name).toPromise();
        await this.updateStudents();
    }
}
