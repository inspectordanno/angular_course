import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post-model';
import { map, catchError } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  firebaseUrl = 'https://ng-complete-guide-ffa0c.firebaseio.com/posts.json';
  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  createandStorePost(title: string, content: string) {
    const postData: Post = { title, content };

    this.http
      .post<{name: string}>(this.firebaseUrl, postData)
      .subscribe(responseData => {
        console.log(responseData);
      }, error => {
        this.error.next(error.message);
      });
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>(this.firebaseUrl)
        .pipe(
          map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }))
    }

  deletePosts() {
    return this.http
      .delete(this.firebaseUrl);
  }
}
