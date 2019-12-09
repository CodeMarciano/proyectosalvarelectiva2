import { Component, OnInit } from '@angular/core';
import { CargoService } from '../services/cargo.service';
import { Cargo } from '../models/cargo.model';
import { Horario } from '../models/horario.model';
import { HorarioService } from '../services/horario.service';
// import {NgbModal, ModalDismissReasons} from '@angular/ng-bootastrap';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {


  // public pieChartType;
  // public pieChartLabels;
  // public pieChartData  = [];
  
  // public pieChartLabels = ['Sales Q1','Sales Q2','Sales Q3','Sales Q4'];
  // public pieChartData = [120, 150, 180, 90];
  // public pieChartType = "pie";

  Cargo: Cargo[];
  CargoGrafica: Cargo[];
  Horario: Horario[];

  constructor(private cargoService: CargoService, private horarioService: HorarioService) {  }

  ngOnInit() {
    this.listCargo();
    this.GrafiCantidadEmpleadoPorCargo();
    // this.pieChartData = [this.aux];
  }

  listCargo() {
    this.cargoService.getAll().subscribe(
      data => {
        // console.log(data);
        this.Cargo = data;
      },
      error1 => {
        console.log(error1);
      }
    );
  }

  listHorarioPorCargo(idCargo: number) {
    this.horarioService.getHorarioPorCargo(idCargo).subscribe(
      data => {
        // console.log(data);
        this.Horario = data;
      },
      error1 => {
        console.log(error1);
      }
    );
  }

  GrafiCantidadEmpleadoPorCargo() {
    this.cargoService.getCantidaEmpleadoPorCargo().subscribe(
      data => {
        console.log(data);
        this.CargoGrafica = data;
      },
      error1 => {
        console.log(error1);
      }
    );
  }

}
