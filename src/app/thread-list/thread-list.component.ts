import { Component, OnInit } from '@angular/core';
import { Forum } from '../models/forum';
import { ThreadListService } from './thread-list.service';

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.css']
})
export class ThreadListComponent implements OnInit {
  threadList:Forum[];

  constructor(private _threadListService: ThreadListService) { }

  ngOnInit() {
    this._threadListService.getAllThreads().subscribe(x => {
      this.threadList = x;
    }, err => console.log(err));
  }

}