import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsService {



  api_url='https://newsapi.org/v2/top-headlines?language=en'
  constructor(private http:HttpClient) { 
 
   
  }

  getNews(country,cat){
 
    if(cat=='news'){
      let url=this.api_url+'&country='+country+'&apiKey=d40c9c01d0c94b76a4b969ca2f3e85cf';
      return this.http.get(url);
    }
    if(cat=='category'){
      let url=this.api_url+'&category='+country+'&apiKey=d40c9c01d0c94b76a4b969ca2f3e85cf';

      return this.http.get(url);
    }
    
  }
  filter(s){
    let url="https://newsapi.org/v2/everything?q="+s+"&apiKey=72b203e537ea4a50a11497f68894368f";
    console.log(url);
    return this.http.get(url);
   
  }
}
