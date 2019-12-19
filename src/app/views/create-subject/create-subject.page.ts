import { Component, OnInit } from '@angular/core';
import {SubjectService} from '../../services/subject.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.page.html',
  styleUrls: ['./create-subject.page.scss'],
})
export class CreateSubjectPage implements OnInit {

    subjectName: string;
    degree: string;

    constructor(
        private subjectService: SubjectService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    changeDegree(event) {
        this.degree = event.detail.value;
    }

    async addSubject() {
        await this.subjectService.addNewSubject(this.subjectName, this.degree).toPromise();
        await this.router.navigateByUrl('/home');
    }
}
