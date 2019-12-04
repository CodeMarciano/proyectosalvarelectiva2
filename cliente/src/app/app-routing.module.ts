import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistaComponent } from './artista/artista.component';
import { AlbunComponent } from './albun/albun.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CargoComponent } from './cargo/cargo.component';


const routes: Routes = [
  {path: 'Artista', component: ArtistaComponent},
  {path: 'Albun', component: AlbunComponent},
  {path: 'Empleado', component: EmpleadoComponent},
  {path: 'Cargo', component: CargoComponent},
  {path: '**', component: ArtistaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
