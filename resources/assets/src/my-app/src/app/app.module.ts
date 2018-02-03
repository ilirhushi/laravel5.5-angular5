import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PartialsModule, partialsComponents } from './partials/partials.module';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { appRouting } from './app-routing';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        PartialsModule,
        ReactiveFormsModule,
        appRouting
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
