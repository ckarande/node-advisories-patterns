import { Component, OnInit } from '@angular/core';
import { Advisory } from '../advisory';
import { AdvisoryService } from '../advisory.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  advisories: Advisory[] = [];

  constructor(private advisoryService: AdvisoryService) { }

  ngOnInit() {
    this.getAdvisories();
  }

  getAdvisories(): void {
    this.advisoryService.fetchAdvisories()
      .subscribe(advisories => this.advisories = advisories.slice(1, 5));
  }
}
