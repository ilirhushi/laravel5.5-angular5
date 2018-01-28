import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// RX imports
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/retry';

import { AppComponent } from './app.component';
import { appRouting } from './app-routing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        appRouting,
        HttpClientModule
    ],
    providers: [HttpClient, ApiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
