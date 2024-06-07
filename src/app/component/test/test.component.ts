import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    RouterLink,
    MatMenuModule,

    MatButtonModule,

  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

}
