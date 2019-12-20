import { Component } from '@angular/core';
import {Subject} from '../../models/Subject';
import {SubjectService} from '../../services/subject.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    subjects: Subject[];
    degree: String = 'all';

    constructor(
        private subjectService: SubjectService,
        private router: Router
    ) {}

    async ionViewWillEnter(){
        this.updateSubjects();
    }

    async updateSubjects(){
        if(this.degree === 'all'){
            this.subjects = await this.subjectService.getSubjects().toPromise();
        }
        else{
            this.subjects = await this.subjectService.getSubjectsByDegree(this.degree).toPromise();
        }
    }

    async changeDegree(event){
        this.degree = event.detail.value;
        await this.updateSubjects();
    }

    async gotoSubject(subject){
        await this.router.navigateByUrl('/subject/'+subject._id)
    }

    async createSubject(){
        await this.router.navigateByUrl('/create-subject');
    }

    async createStudent(){
        await this.router.navigateByUrl('/create-student');
    }

    async deleteSubject(subject) {
        await this.subjectService.deleteSubject(subject.name).toPromise();
        this.updateSubjects();
    }
}
