import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// import { FetchedTableComponent } from './fetched-table/fetched-table.component';
import { HeaderComponent } from './header/header.component';
//import { EmployeeFormComponent } from './employee-form/employee-form.component'
import { FormsModule } from '@angular/forms';

 

@NgModule({
  declarations: [
    AppComponent,
    // FetchedTableComponent,
    HeaderComponent,
    // EmployeeFormComponent
    routingComponents,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
