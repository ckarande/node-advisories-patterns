import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Advisory } from '../advisory';
import { AdvisoryService } from '../advisory.service';

//TODO:  Separate attack list and advisories list into separate components - as a child of advisories component
// Challenge was to pass data betwenn both if service function on filter by attack type returns observable
// in search component, there is no way to sync it up or pass in the advisory list component

@Component({
    selector: 'app-advisories',
    templateUrl: './advisories.component.html',
    styleUrls: ['./advisories.component.css']
})
export class AdvisoriesComponent implements OnInit, AfterViewInit {
    advisories: Advisory[];
    attackCategories: Array<Object>;
    selectedAttackType: string;
    count: number;
    @ViewChild('list') list: ElementRef;
    previousSelectedCatgIndex: number = 0;

    constructor(private advisoryService: AdvisoryService, private sanitizer: DomSanitizer) { }

    ngOnInit(): void {

        this.advisoryService.fetchAdvisories().subscribe(advisories => {
            this.advisories = advisories;
            this.attackCategories = Object.entries(this.advisoryService.getAttackCategories());
            // Jitendra  : just adding all options hardcoded for now
            this.attackCategories.push(["ALL", 1023])
            // Jitendra code end
            this.attackCategories.sort(function (a, b) {
                return b[1] - a[1];
            });
        });

    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.filterByAttackType('ALL', 0);
        }, 500)
    }
    // Push a search term into the observable stream.
    filterByAttackType(term: string, index: number = 0): void {
        this.selectedAttackType = term;
        this.list.nativeElement.children[this.previousSelectedCatgIndex].style.background = '#3E4252';
        this.list.nativeElement.children[index].style.background = '#24A8E1';

        this.previousSelectedCatgIndex = index;
        this.advisoryService.filterAdvisoriesByAttackType(term).subscribe(result => {
            this.advisories = result;
            this.count = this.advisories.length;
        });
    }

}