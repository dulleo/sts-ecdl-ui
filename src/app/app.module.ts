import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestListComponent } from './test/list/test-list.component';
import { DataService } from './service/data.service';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { MessageService } from './service/message.service';
import { CommonModule } from '@angular/common';
import { ExamComponent } from './exam/exam.component';
import { ReviewTestComponent } from './test/review/review-test.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { QuestionListComponent } from './question/list/question-list.component';
import { QuestionManageComponent } from './question/manage/question-manage.component';
import { TestManageComponent } from './test/manage/test-manage.component';

@NgModule({
  declarations: [
    AppComponent, 
    TestListComponent,
    ExamComponent,
    TestManageComponent,
    ReviewTestComponent,
    QuestionListComponent,
    QuestionManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BsDropdownModule.forRoot()
  ],
  providers: [DataService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
