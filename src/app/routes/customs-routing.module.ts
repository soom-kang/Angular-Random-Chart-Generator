import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemoComponent, DetailsComponent } from '@/components';

const routes: Routes = [
  { path: 'memo', component: MemoComponent },
  { path: 'memo/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomsRoutingModule {}
