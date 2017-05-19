import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PracticComponent } from './practic.component';
import { DirectivesComponent } from './directives.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { DataService } from './data.service';
import { OnInit } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
/*import { CrisisListComponent } from './crisis-list.component';
import { HeroListComponent } from './hero-list.component';*/

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: ServersComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component: DirectivesComponent}
];

/*const routing = RouterModule.forRoot(appRoutes);*/

@NgModule({
  declarations: [
    AppComponent,
    PracticComponent,
    DirectivesComponent,
    ServerComponent,
    ServersComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService, ServicesComponent, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
