import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from '../placeholder.service';
import { Post } from '../post';

@Component({
  selector: 'app-postsList',
  templateUrl: './postsList.component.html',
  styleUrls: ['./postsList.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  constructor(private placeholderService: PlaceholderService) {
    this.placeholderService.getPosts().subscribe(response => {
    this.posts = response;
    });
   }
  ngOnInit() {
  }
}