import { Component,EventEmitter,Output } from '@angular/core';
import { WeatherSearchService } from './weather-search.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css'],
  providers: [WeatherSearchService]
})
export class WeatherSearchComponent {

  results: Object;
  list:any = [];

  @Output() receive= new EventEmitter<any>();
  

  constructor(private weatherSearchService: WeatherSearchService) {}


  getDetails(searchTerm:any){
    //alert(searchTerm.value

    this.weatherSearchService.searchEntries(searchTerm.value)
      .subscribe(results => {
        this.results = results;
        console.log(this.results)
        this.receive.emit(this.results)
      });
  }

  getFavoritesList(){

    this.weatherSearchService.showFavList()
        .subscribe((data)=>{
          this.list=data;
        })

  }



    
}