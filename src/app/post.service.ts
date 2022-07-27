import {
  Injectable
} from '@angular/core';
import {
  Post
} from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = []

  url =  "http://localhost:3000/posts"

  constructor() {
    // fetch(this.url).then(res => res.json()).then((res: Post[]) => {
    //   this.posts = res
    // })
  }

  getPostsFromServer() {
    return fetch(this.url).then(res => res.json()).then((res: Post[]) => {
      this.posts = res
    })
  }

  // getActivePosts():Post[]{
  // return this.posts.filter((e)=>e.active == true)
  // }
  // getInactivePosts():Post[]{
  // return this.posts.filter((e)=>e.active == false)
  // }
  getPosts(a: boolean) {
    return this.posts.filter((e) => e.active == a)
  }

  editPost(id: number, attiva: boolean) {
    return fetch(this.url+ "/" + id, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        active: attiva
      })
    }).then((res) => {
      // console.log(res)
      // if(res.ok){
      this.posts = this.posts.map((e) => {
        if (e.id == id) {
          e.active = attiva
        }
        return e
      })
      // }
    })
  }
}
