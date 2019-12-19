import { Injectable } from '@angular/core';
import {Url} from './url';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../models/Student';

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    url: string;

    constructor(private http: HttpClient) {
        this.url = new Url().url;
    }

    getStudents(): Observable<Student[]>{
        return this.http.get<Student[]>(this.url + '/student/get');
    }

    getStudent(id): Observable<Student>{
        return this.http.get<Student>(this.url + '/student/get/' + id);
    }

    addNewStudent(student: Student){
        return this.http.post(this.url + '/student/add', {student});
    }

    deleteStudent(id){
        return this.http.get<any>(this.url + '/student/delete/' + id);
    }
}
