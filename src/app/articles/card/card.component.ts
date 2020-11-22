import { Component, OnInit, Input } from '@angular/core';
import { Articles } from './../../lib/requests.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() article: Articles;
  @Input() hasImage = false;
  @Input() truncNumber = 100;

  constructor() { }

  ngOnInit() {
  }

}
