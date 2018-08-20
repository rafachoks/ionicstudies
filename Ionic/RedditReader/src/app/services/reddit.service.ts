import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class RedditService {
  http: any;
  baseUrl: String;

  constructor(http: Http) {
    this.http = http;
  }

  getPost(category, limit) {
    return this.http.get('https://www.reddit.com/r/' + category + '/top.json?limit=' + limit)
    .map(res => res.json());
  }
}
