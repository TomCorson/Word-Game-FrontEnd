import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WordSelectorComponent } from './word-selector/word-selector.component';

const routes: Routes = [
  { path: 'word-selector', component: WordSelectorComponent },
  { path: 'home-page', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [WordSelectorComponent, HomeComponent];
