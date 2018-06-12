import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Advisory } from '../advisory';
import { AdvisoryService } from '../advisory.service';

//TODO:  Separate attack list and advisories list into separate components - as a child of advisories component
// Challenge was to pass data betwenn both if service function on filter by attack type returns observable
// in search component, there is no way to sync it up or pass in the advisory list component

@Component({
    selector: 'app-advisories',
    templateUrl: './advisories.component.html',
    styleUrls: [ './advisories.component.css' ]
})
export class AdvisoriesComponent implements OnInit {
    advisories: Advisory[];
    attackCategories: Array<Object>;
    selectedAttackType: string;
    count: number;

    constructor(private advisoryService: AdvisoryService, private sanitizer: DomSanitizer) {}

    ngOnInit(): void {

        this.advisoryService.fetchAdvisories().subscribe(advisories => {
            this.advisories = advisories;
            this.attackCategories =   Object.entries(this.advisoryService.getAttackCategories());
            this.attackCategories.sort(function(a, b) {
                return b[1] - a[1];
            });
        });

    }
    // Push a search term into the observable stream.
    filterByAttackType(term: string): void {
        this.selectedAttackType = term;
        this.advisoryService.filterAdvisoriesByAttackType(term).subscribe(result => {
            this.advisories = result;
            this.count = this.advisories.length;
        });
    }

}
