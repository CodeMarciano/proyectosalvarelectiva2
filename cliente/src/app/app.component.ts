import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario/shared/usuario.model';
import { Empleado } from './models/empleado.model';
import { Persona } from './models/persona.model';
import { ArtistaService } from './services/artista.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Artista } from './models/artista.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArtistaService]
})
export class AppComponent implements OnInit {
  empleado: Empleado;
  fromArtista: FormGroup;
  // titulo : string = "hola mundo";
  // title = 'clientApp2';
  // listaPersona: any[];
  // Nombre: string;
  // Correo: string;
  // listaUsuario: Usuario[];
  persona: Persona;
  listaEmpleados: Empleado[];
  constructor(private artistaService: ArtistaService, private formBuilder: FormBuilder) {

    this.empleado = new Empleado();
    this.persona = new Persona();
    this.listaEmpleados = [];
    // this.listaUsuario=[];
    // // tslint:disable-next-line:whitespace
    // this.listaPersona = ['Ana','JC','Raul','Raul','Brian'];
    // console.log(this.listaPersona);
    // this.Nombre = '';
    // this.Correo = '';
  }
  ngOnInit() {
    // this.listArtistas();
    // this.createForm();
  }
  // listArtistas() {
  //   this.artistaService.getAll().subscribe(
  //     data => {
  //       console.log(data);
  //     },
  //     error1 => {
  //       console.log(error1);
  //     }
  //   );
  // }
  // guardar() {
    // console.log(this.persona);
    // console.log(this.empleado);
    // let e = new Empleado();
    // e.nombre = this.persona.nombre;
    // e.apellido = this.persona.apellido;
    // e.salario = this.empleado.salario;
    // this.listaEmpleados.push(e);
    // console.log("es una prueba", this.empleado);
    // console.log("esta funcionando el boton");
    // console.log(this.listaEmpleados);
    // alert("ya paso el limite, sol se permite 10 datos");
    // let  usuario = new Usuario();
    // usuario.Nombre = this.Nombre;
    // usuario.Correo = this.Correo;
    // console.log(this.Nombre +" "+this.Correo);
    // console.log(usuario);
    // this.listaUsuario.push(usuario);
    // console.log(this.listaUsuario);
  //   alert(this.fromArtista.value.nombre);
  //   const newArtist= new Artista();
  //   newArtist.nombre = this.fromArtista.value.nombre;
  //   newArtist.descripcion = this.fromArtista.value.descripcion;
  //   newArtist.imagen = this.fromArtista.value.imagen;
  //   this.artistaService.create(newArtist).subscribe(
  //     data=>{
  //       alert(data.message);
  //     },
  //     error=>{
  //       console.log(error.message);
  //     }
  //   );
  // }
  //  createForm(){
  //    this.fromArtista=this.formBuilder.group({
  //      nombre:['',[Validators.required]],
  //      descripcion:['',[Validators.required]],
  //      imagen:['',[Validators.required]]
  //    });
  //  }
}
