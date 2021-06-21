import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

   myTimer= setInterval(() => {
      this.timer(); }, 1000);

  ngOnInit(): void {  

  }

  count= localStorage.getItem("counterState")  ?localStorage.getItem("counterState") : "30";;
  


  timer(){
    if (this.count!=null){
      let countNumber = parseInt(this.count)
      if(countNumber>0){
        countNumber--
        localStorage.setItem("counterState", countNumber.toString());
        countNumber>=10?this.count=countNumber.toString():this.count=`0${countNumber.toString()}`
      }
      else{
        alert("You missed the last rocket to mars!");
        this.count="30"
      }
    }
  
    

      
    }
    ResetTimer(){
      
     clearInterval(this.myTimer);
      this.count="30"
     this.myTimer= setInterval(() => { this.timer(); }, 1000);


    }
    
    


  }



