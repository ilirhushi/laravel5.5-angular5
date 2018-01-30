import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-admin-template',
    templateUrl: './admin-template.html',
    styleUrls: ['./admin-template.scss']
})
export class AdminTemplateComponent implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello Admin Template');
    }

}
