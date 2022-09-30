import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from '../model/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesserviceService {

  baseUrl='http://localhost:8070/api/v1.0/lms/courses'

  constructor(private http: HttpClient) { }

  getAllCourse(): Observable<Courses[]> {
    return this.http.get<Courses[]>(`${this.baseUrl}/getAll`);
  }

  getByTechnology(technology:string):Observable<Courses[]>{

    return this.http.get<Courses[]>(`http://localhost:8070/api/v1.0/lms/courses/info/${technology}`);

  }

  getByTechnoandDuration(technology:string,courseDuration:number):Observable<Courses[]>{

    return this.http.get<Courses[]>(`http://localhost:8070/api/v1.0/lms/courses/get/${technology}/${courseDuration}`);

  }
}
