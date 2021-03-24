import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '@/components';

const routes: Routes = [
  { path: '', component: ListComponent },
  {
    path: 'customs',
    loadChildren: () => import('@/customs.module').then((m) => m.CustomsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
