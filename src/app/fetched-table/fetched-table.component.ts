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

  ngOnInit(): void {
    this.getDataService.getApiData().subscribe(data => {
      this.apidata = data;
      
    }
    
    )
    
  
  }
  getData(){
    
    return this.apidata;
  }
  

}
