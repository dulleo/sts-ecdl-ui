import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTestComponent } from './create-test/create-test.component';
import { TestListComponent } from './test-list/test-list.component';
import { EditTestComponent } from './edit-test/edit-test.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { CreateAnswersComponent } from './answers/create-answers/create-answers.component';

const routes: Routes = [
  { path: '', redirectTo: 'tests', pathMatch: 'full' },
  { path: 'tests', component: TestListComponent},
  { path: 'tests/create', component: CreateTestComponent},
  { path: 'tests/edit', component: EditTestComponent},
  { path: 'questions/create', component: CreateQuestionComponent },
  { path: 'answers/create', component: CreateAnswersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
