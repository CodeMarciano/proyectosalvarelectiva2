import { Component, OnInit } from '@angular/core';
import {Artista} from '../models/artista.model';
import {ArtistaService} from '../services/artista.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  Artistas: Artista[];
  fromArtista: FormGroup;

  public GrdOAct = 0;
  public IdAct = 0;
  public textBtnGrd = "";

  constructor(private artistaService: ArtistaService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.listArtistas();
    this.createForm();
    this.textBtnGrd = "Guardar";
  }

  listArtistas() {
    this.artistaService.getAll().subscribe(
      data => {
        // console.log(data);
        this.Artistas = data;
      },
      error1 => {
        console.log(error1);
      }
    );
  }

  guardarArtita() {
    if(this.GrdOAct == 0){
      // alert(this.fromArtista.value.nombre);
      const newArtist= new Artista();
      newArtist.nombre = this.fromArtista.value.nombre;
      newArtist.descripcion = this.fromArtista.value.descripcion;
      newArtist.imagen = this.fromArtista.value.imagen;
      this.artistaService.create(newArtist).subscribe(
        data=>{
          alert(data.message);
          this.listArtistas();
        },
        error=>{
          console.log(error.message);
        }
      );
    }else{
      this.actualizarArtista(this.IdAct);
    }
  }

  actualizarArtista(id: number) {
    const artista: Artista = new Artista();

    artista.nombre = this.fromArtista.value.nombre;
    artista.descripcion = this.fromArtista.value.descripcion;
    artista.imagen = this.fromArtista.value.imagen;

    this.artistaService.update(id, artista).subscribe(
      data => {
        // console.log(data);
        this.listArtistas();
        alert(data.message)
      },
      error1 => {
        console.log(error1.message);
      }
    );
    this.GrdOAct = 0;
    this.IdAct = 0;
    this.textBtnGrd = "Guardar";
  }

  viewArtista(id: number){
    // console.log(id);
    this.GrdOAct = 1;
    this.IdAct = id;
    this.textBtnGrd = "Actualizar";

    this.artistaService.view(id).subscribe(
      data => {
        // console.log(data.nombre);
        this.fromArtista.get('nombre').setValue(data.nombre);
        this.fromArtista.get('descripcion').setValue(data.descripcion);
      },
      error1 => {
        console.log(error1.message);
      }
    );
  }

  eliminarArtista(id: number) {
    // console.log(id);
    var aux =  confirm("estas seguro de Eliminar?");
    if (aux == true) {
      this.artistaService.delete(id).subscribe(
        data => {
          // console.log(data);
          this.listArtistas();
          alert("Eliminado");
          // alert(data);
        },
        error1 => {
          console.log(error1.message);
        }
      );
    }
  }

  createForm(){
    this.fromArtista=this.formBuilder.group({
      nombre:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      imagen:['',[Validators.required]]
    });
  }

}
