import { CoursesService } from './courses.service';
import{Component} from '@angular/core';

@Component({
    selector : 'courses',
    template : `
    <ul>
    <li *ngFor= 'let course of courses'> {{course}} </li>
    </ul>
    `
})

export class CoursesComponent{

    title = 'List of Courses';
    courses;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

}