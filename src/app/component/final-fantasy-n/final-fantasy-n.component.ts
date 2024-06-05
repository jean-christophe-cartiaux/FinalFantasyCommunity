import {Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import{FinalFantasyService} from "../../service/finalFantasy.service";


@Component({
  selector: 'app-final-fantasy-n',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './final-fantasy-n.component.html',
  styleUrl: './final-fantasy-n.component.scss'
})
export class FinalFantasyNComponent implements OnInit{
ffN:any;

constructor(
  private route:ActivatedRoute,
  private finalFantasyService: FinalFantasyService,
){}

  ngOnInit(){
  const id= +this.route.snapshot.paramMap.get('id')!;
  this.ffN = this.finalFantasyService.getN(id)
  }

}
