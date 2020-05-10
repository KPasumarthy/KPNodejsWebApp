//KP : import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { KPWebApisService } from '../kpwebapis/kpwebapis.service';

//KP: Pagination Interface
interface IServerResponse {
  asyncItems: any[];
  asyncTotal: Number;
}



@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  //constructor() { }
  constructor(
    private _kpWebApisService: KPWebApisService
  ) { }

  ngOnInit() {
    // an example array of 150 items to be paged
    this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}` }));
  }

  //KP : Angular 6 Ngx-PaginationComponent
  public data: Array<any>;
  public totalRecords: String;
  public page: Number = 1;

  getRandomArray() {
    this.data = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}` }));
    this.totalRecords = this.data.length.toString();
  }

  getRandomUsers() {
    this._kpWebApisService.getRandomUsers().subscribe((data) => {
      console.log(data);
      this.data = data.results;
      this.totalRecords = data.results.length;
    });
  }

  ////KP : Uses http.get() to obtain persons data hosted on localhost API endpoint
  async getPersons() {
    await this._kpWebApisService.getPersons().subscribe((data) => {
      console.log(data);
      this.data = data.results;
      this.totalRecords = data.results.length;
    });
  }




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

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}