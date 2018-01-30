import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';

@Component({
    selector: 'my-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private svcService: ServerService) {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello Home');

        this.svcService.get('home/test').subscribe((resp) => {
            console.log('resp: ', resp);
        });
    }

}
