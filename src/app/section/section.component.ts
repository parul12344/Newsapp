import { Component, OnInit} from '@angular/core';
import { NewsService } from '../news.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  country;
  resultArr=[];
  res=[];
 status:boolean=false;
  cat;
  data = [];
  data_new=[];
  page = 0;
  size = 4;
 test:boolean=true;

 

  constructor(private serve:NewsService,private route: ActivatedRoute) {
    
    route.params.subscribe(val => {
    
     this.updateId(val['name'])

    });
   }
 
   
   ngOnInit() {
   console.log('hello');
   }

   searchFilter(event){
console.log(event);
this.test=false;
this.status=true;
this.res.push(event['articles']);
this.getDataa({pageIndex: this.page, pageSize: this.size});
   }

   getData(obj) {

    let index=0,
        startingIndex=obj.pageIndex * obj.pageSize,
        endingIndex=startingIndex + obj.pageSize;
console.log(startingIndex);
console.log(endingIndex);

        this.data = this.resultArr[0].filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }
  getDataa(obj) {

    let index=0,
        startingIndex=obj.pageIndex * obj.pageSize,
        endingIndex=startingIndex + obj.pageSize;
console.log(startingIndex);
console.log(endingIndex);

        this.data_new = this.res[0].filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }
   
  updateId(country){
    let url=this.route.snapshot['_routerState'].url; 
    
    let url_name=url.split('/');
    this.cat=url_name[1];
    this.country=country;
    this.fetchData().then(result=>{
      if(result){
       console.log(result);
       console.log(result['articles']);
        this.resultArr=[];
       this.resultArr.push(result['articles']);
       console.log(this.resultArr);
      
       this.getData({pageIndex: this.page, pageSize: this.size});
      }
      
     });
  }
  getNews(){
   
    if(this.country){

      return new Promise((resolve,reject)=>{
        this.serve.getNews(this.country,this.cat).subscribe((data)=>{
             resolve(data);
        });
      });
    }
  }
  async fetchData(){
    let result=await this.getNews();
    return result;
  }

}
