import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 
@Output() event =new EventEmitter();
  constructor(private service:NewsService) { }
name;
  ngOnInit(): void {
  }
  filterSearch(name){
    this.name=name;
    this.fetchNews().then(result=>{
      if(result){
        this.event.emit(result);
      }

    })
  }
  fetchData(){
    return new Promise((resolve,reject)=>{
      this.service.filter(this.name).subscribe(result=>{
        resolve(result);
      })
    });
  }
async fetchNews(){
  let result=await this.fetchData();
  return result;
}

}
