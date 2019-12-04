import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UsuarioComponent} from './usuario/usuario.component';
import {PersonaComponent} from './persona/persona.component';
import {EmpleadoComponent} from './empleado/empleado.component';
import {ArtistaComponent} from './artista/artista.component';
import {HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {IncrementadorComponent} from './components/incrementador/incrementador.component';
import {ChartsModule} from "ng2-charts";
import { AlbunComponent } from './albun/albun.component';
import { CargoComponent } from './cargo/cargo.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    PersonaComponent,
    EmpleadoComponent,
    ArtistaComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    LoginComponent,
    IncrementadorComponent,
    AlbunComponent,
    CargoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
