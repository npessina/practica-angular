
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ "Title: " + title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />  
        <div (click)="onDivClicked()">
            <button class="btn btn-primary" [class.active]="isActive" (click)="onSave($event)">Save</button>
        </div>
    `   
})

export class CoursesComponent {
    title = "List of courses";
    courses;
    isActive = true;
    email = "me@example.com"

    onKeyUp() {
        console.log(this.email);
    }

    onDivClicked() {
        console.log("Div was clicked");
    }

    onSave($event: any) {
        console.log("Button was clicked", $event);
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}