import { Component, OnInit } from '@angular/core';
import {SubjectService} from '../../services/subject.service';
import {Subject} from '../../models/Subject';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
})
export class SubjectPage implements OnInit {

    subject: Subject;

    constructor(
        private subjectService: SubjectService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
    }

    async ionViewWillEnter(){
      let id = this.route.snapshot.paramMap.get('id');
      this.subject = await this.subjectService.getSubjectFromId(id).toPromise();
    }

    async gotoStudent(student){

    }
}
