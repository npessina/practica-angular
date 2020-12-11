import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})

export class LikeComponent {
@Input('isLiked') isLiked: boolean | undefined;
@Input('likesCount') likesCount: number | undefined;

onClick() {
  this.isLiked = !this.isLiked

  this.likesCount = (!this.isLiked) ? 0 : 1;

  // if (this.isLiked) 
  //   this.likesCount = 1;
  // else 
  //   this.likesCount = 0;
}

}
