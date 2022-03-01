import { Component, OnInit } from '@angular/core';
import {AdviceService} from "../services/advice.service";
import {AdvicesInterface} from "../interfaces/advices-interface";

@Component({
  selector: 'app-advice-card',
  templateUrl: './advice-card.component.html',
  styleUrls: ['./advice-card.component.css']
})
export class AdviceCardComponent  {

   advice : AdvicesInterface | undefined ;

  constructor(private adviceService :AdviceService) { }

  getAdvice(){
    //this.advice  = this.adviceService.getData()
    this.adviceService.getData().subscribe(data => {

      this.advice = data['slip'];
      console.log(this.advice?.advice)
    })
   //console.log(this.advice);
  }
}
