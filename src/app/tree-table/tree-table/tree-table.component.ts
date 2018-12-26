import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.scss']
})
export class TreeTableComponent implements OnInit {

  @Input() columns: string[];

  constructor() { }

  ngOnInit() {
  }

}
