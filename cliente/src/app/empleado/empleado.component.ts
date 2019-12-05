import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from '../models/empleado.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  empleado: Empleado;
  @Input() empleadoDato: Empleado;
  constructor() {
    this.empleado= new Empleado();

   }

  ngOnInit() {
  }
  crearObjeto(){

  }

}
