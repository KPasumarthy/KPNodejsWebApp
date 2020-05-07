import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

//KP : Angular 6 JwPaginationComponent has the following requirements
/*  There are 2 required properties for using the Angular 8 pagination component:
        items - the array of items to be paged
        changePage - a callback function for handling the changePage event

    There are also a few optional properties:
        pageSize - the number of items displayed on each page (defaults to 10)
        maxPages - the max number of page links to display in the pagination nav (defaults to 10)
        initialPage - the initial page to display (defaults to 1) */

  public items = [];
  public pageOfItems: Array<any>;

  constructor() { }

  ngOnInit() {
    // an example array of 150 items to be paged
    this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}` }));
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}