import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestListComponent } from './test-list/test-list.component';
import { DataService } from './service/data.service';
import { HttpClientModule } from '@angular/common/http'; 
import { CreateTestComponent } from './create-test/create-test.component';
import { FormsModule } from '@angular/forms';
import { MessageService } from './service/message.service';
import { EditTestComponent } from './edit-test/edit-test.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { CommonModule } from '@angular/common';
import { CreateAnswersComponent } from './answers/create-answers/create-answers.component';

@NgModule({
  declarations: [
    AppComponent, 
    TestListComponent, 
    CreateTestComponent, 
    EditTestComponent,
    CreateQuestionComponent,
    CreateAnswersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [DataService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
