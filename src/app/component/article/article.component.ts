import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";

@Component({
  selector: 'app-article',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent
    ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

}
