import {
  Component,
  OnInit
} from '@angular/core';
import {
  Post
} from '../post';
import {
  PostService
} from '../post.service';

@Component({
  selector: 'app-active-post-page',
  templateUrl: './active-post-page.component.html',
  styleUrls: ['./active-post-page.component.css']
})
export class ActivePostPageComponent implements OnInit {

  posts: Post[] = []

  constructor(private postSrv: PostService) {}

  ngOnInit(): void {
    // this.posts = this.postSrv.getPosts(true)
    this.postSrv.getPostsFromServer().then(()=>{
      this.posts=this.postSrv.getPosts(true)
    })
  }

  disattivaPost(id: number) {
    this.postSrv.editPost(id, false).then(() => {
      this.posts = this.postSrv.getPosts(true)
    })
  }

}
