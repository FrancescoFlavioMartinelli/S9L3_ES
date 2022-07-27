import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-inactive-post-page',
  templateUrl: './inactive-post-page.component.html',
  styleUrls: ['./inactive-post-page.component.css']
})
export class InactivePostPageComponent implements OnInit {

  posts: Post[] = []

  constructor(private postSrv: PostService) { }

  ngOnInit(): void {
    // this.posts = this.postSrv.getPosts(false)
    this.postSrv.getPostsFromServer().then(()=>{
      this.posts=this.postSrv.getPosts(false)
    })
  }
  attivaPost(id: number) {
    this.postSrv.editPost(id, true).then(() => {
      this.posts = this.postSrv.getPosts(false)
    })
  }

}
