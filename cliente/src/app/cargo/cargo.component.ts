import { Component, OnInit } from '@angular/core';
import { CargoService } from '../services/cargo.service';
import { Cargo } from '../models/cargo.model';
// import {NgbModal, ModalDismissReasons} from '@angular/ng-bootastrap';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {

  // public barChartOptions = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };

  // public barChartLabels = ['2006','2007','2008','2009','2010','2011','2012'];
  // public barChartType = "bar";
  // public barChartLegend = true;

  // public barChartData = [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Mujeres'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Hombres'},
  // ];

  Cargo: Cargo[];

  constructor(private cargoService: CargoService) { }
  // constructor() { }

  ngOnInit() {
    this.listCargo();
  }

  listCargo() {
    this.cargoService.getAll().subscribe(
      data => {
        console.log(data);
        this.Cargo = data;
      },
      error1 => {
        console.log(error1);
      }
    );
  }

}
