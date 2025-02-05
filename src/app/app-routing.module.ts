import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { TwoWayBidingComponent } from './components/two-way-biding/two-way-biding.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'directives', component: DirectivesComponent },
  { path: 'if-render', component: IfRenderComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'emitter', component: EmitterComponent },
  { path: 'list-render', component: ListRenderComponent },
  { path: 'two-way-binding', component: TwoWayBidingComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
