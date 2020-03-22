import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CountryService } from '../country.service';


@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {
  resultArr = [];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private country_ser:CountryService) {

   
  }

  ngOnInit(){
    console.log('hello1');
    this.fetchData().then((result:any[]) => {


      for(let i=0;i<=result.length-1;i++){
        this.resultArr.push(result[i]);
      
      }
   console.log(this.resultArr);
    });
  
}
getCountry(){
  return new Promise((resolve,reject)=>{
    this.country_ser.getCountry().subscribe(data=>{
     resolve(data);
     });
  });
}
  async fetchData(){
    let resultArr = await this.getCountry();
    return resultArr;
  }

}
