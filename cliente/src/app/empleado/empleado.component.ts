import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from '../models/empleado.model';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from '../services/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  // public pieChartLabels = ['Sales Q1','Sales Q2','Sales Q3','Sales Q4'];
  // public pieChartData = [120, 150, 180, 90];
  // public pieChartType = "pie";
  public pieChartLabels = ['Hombres', 'Mujeres'];
  public pieChartData = [0, 0];
  public pieChartType = "pie";
  public cantidadEmpleadosMas = 0;
  public cantidadEmpleadosFem = 0;

  Empleado: Empleado[];
  EmpleadoGraMasFem: Empleado[];
  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.listEmpleado();
    this.cantidadEmpleadosGenero();
  }

  listEmpleado() {
    this.empleadoService.getAll().subscribe(
      data => {
        // console.log(data);
        this.Empleado = data;
      },
      error1 => {
        console.log(error1);
      }
    );
  }

  cantidadEmpleadosGenero() {
    this.empleadoService.getCantidadGenero().subscribe(
      data => {
        // console.log(data);
        // this.EmpleadoGraMasFem = data;
        for (let i = 0; i < data.length; i++) {
          if (data[i].genero == "M") {
            this.cantidadEmpleadosMas = data[i].cantidadPersona;
          }
          if (data[i].genero == "F") {
            this.cantidadEmpleadosFem = data[i].cantidadPersona;
          }
          // console.log(data[i].cantidadPersona);
        }
        // console.log(this.cantidadEmpleadosMas);
        // console.log(this.cantidadEmpleadosFem);
        this.pieChartData = [this.cantidadEmpleadosMas, this.cantidadEmpleadosFem];
      },
      error1 => {
        console.log(error1);
      }
    );
  }
​
  // ageCalculator(){
  //   if(this.age){
  //     const convertAge = new Date(this.age);
  //     const timeDiff = Math.abs(Date.now() - convertAge.getTime());
  //     this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
  //   }
  // }

}
