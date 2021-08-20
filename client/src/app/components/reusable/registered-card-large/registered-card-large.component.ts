import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-registered-card-large',
  templateUrl: './registered-card-large.component.html',
  styleUrls: ['./registered-card-large.component.css'],
})
export class RegisteredCardLargeComponent implements OnInit {
  @Input() item: any;

  constructor() {}

  ngOnInit(): void {}
}
