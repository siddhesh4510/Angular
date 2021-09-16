import { Component, OnInit } from '@angular/core';
import { GetapidataService } from '../getapidata.service'

@Component({
  selector: 'app-fetched-table',
  templateUrl: './fetched-table.component.html',
  styleUrls: ['./fetched-table.component.css']
})
export class FetchedTableComponent implements OnInit {

  constructor(private getDataService: GetapidataService) { }
  public apidata:any=[];
  public displaydata:any=[];
  public paginationArray:any=[];

  ngOnInit(): void {
    this.getDataService.getApiData().subscribe(data => {
      this.apidata = data;
      this.displaydata=this.apidata.slice(0,10);
      this.paginationArray=Array.from({length: this.apidata.length/10}, (_, i) => i + 1)
      //console.log(this.paginationArray)
      
    }
    )
  }
  onPagination(page:number){
    this.displaydata=this.apidata.slice(10*(page-1), 10*(page-1)+10);

  }
  getData(){
    
    return this.apidata;
  }
  

}
