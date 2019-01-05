import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestListComponent } from './test/list/test-list.component';
import { ExamComponent } from './exam/exam.component';
import { ReviewTestComponent } from './test/review/review-test.component';
import { QuestionListComponent } from './question/list/question-list.component';
import { QuestionManageComponent } from './question/manage/question-manage.component';
import { TestManageComponent } from './test/manage/test-manage.component';

const routes: Routes = [
  { path: '', redirectTo: 'tests', pathMatch: 'full' },
  { path: 'tests', component: TestListComponent},
  { path: 'tests/manage', component: TestManageComponent},
  { path: 'tests/review', component: ReviewTestComponent},
  { path: 'questions', component: QuestionListComponent },
  { path: 'questions/manage', component: QuestionManageComponent },
  { path: 'exams', component: ExamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
