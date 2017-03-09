import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Forum } from '../models/forum';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ThreadListService {
  constructor( private _http: Http) { }

  private forumBaseUrl = 'http://localhost:3000/api/forum';
  private headers = new Headers({'Content-Type':'application/json'});

  getAllThreads(): Observable<Forum[]> {
    const url = `${this.forumBaseUrl}`;
    return this._http.get(url).map(res => res.json())
  }
}
