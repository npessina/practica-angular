import { Component, ViewEncapsulation } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed", eventArgs);
  }

  tweet = {
    body: 'Here is the body of the tweet...',
    isLiked: false,
    likesCount: 0
  }

  courses = [1, 2];

  viewMode = 'map';

  otherCourses: any;

  onAdd() {
    this.otherCourses.push({ id: 4, name: 'course4' });
  }

  onChange(course: any) {
    course.name = 'UPDATED';
  }

  loadCourses() {
    this.otherCourses = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' }
    ];
  }

  trackCourse(index: number, course: any) {
    return course ? course.id : undefined;
  }

  canSave = true;

  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith'
    }
  }
}
