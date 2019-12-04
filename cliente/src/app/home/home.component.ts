import {Component, OnInit} from '@angular/core';
import {Artista} from '../models/artista.model';
import {ArtistaService} from '../services/artista.service';
import {ChartsModule, Label, MultiDataSet} from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 /* doughnutChartData: any;
  doughnutChartLabels: any;
  doughnutChartType: any;
  public doughnutChartLabels : Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData : MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];*/
// artistas
  Artistas: Artista[];
  progreso1: number;
  progreso2: number;
  progreso3: number;


  constructor(private artistaService: ArtistaService) {
    this.progreso1 = 0;
    this.progreso2 = 0;
    this.progreso3 = 0;
  }

  ngOnInit() {
    this.listArtistas();
    // this.guardarArtista();
    // this.actualizarArtista(6);
    // this.eliminarArtista(11);
  }

  listArtistas() {
    this.artistaService.getAll().subscribe(
      data => {
        console.log(data);
        this.Artistas = data;
      },
      error1 => {
        console.log(error1);
      }
    );
  }

  guardarArtista() {
    const artista: Artista = new Artista();
    artista.nombre = "eber";
    artista.descripcion = "eber";
    artista.imagen = "eber";
    this.artistaService.create(artista).subscribe(
      data => {
        console.log(data);
        this.listArtistas();
      },
      error1 => {
        console.log(error1);
      }
    );
  }

  actualizarArtista(id: number) {
    const artista: Artista = new Artista();

    artista.nombre = "Licet";
    artista.descripcion = "licet";
    artista.imagen = "eber";
    this.artistaService.update(id, artista).subscribe(
      data => {
        console.log(data);
        this.listArtistas();
      },
      error1 => {
        console.log(error1);
      }
    );
  }

  eliminarArtista(id: number) {
    this.artistaService.delete(id).subscribe(
      data => {
        console.log(data);
        this.listArtistas();
      },
      error1 => {
        console.log(error1);
      }
    );
  }
}
