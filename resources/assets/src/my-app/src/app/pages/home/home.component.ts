import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Home';
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getTitle();
  }

  getTitle() {
    this.apiService.get('title').subscribe(resp => {
        console.log('response: ', resp);
    });
  }

}
