import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestListComponent } from './test-list/test-list.component';
import { DataService } from './service/data.service';
import { HttpClientModule } from '@angular/common/http'; 
import { CreateTestComponent } from './create-test/create-test.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, TestListComponent, CreateTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
