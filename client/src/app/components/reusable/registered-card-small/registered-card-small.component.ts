import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registered-card-small',
  templateUrl: './registered-card-small.component.html',
  styleUrls: ['./registered-card-small.component.css'],
})
export class RegisteredCardSmallComponent implements OnInit {
  @Input() item: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  openCourse() {
    this.router.navigate([`/courses/registered/view/${this.item.id}`]);
  }
}
