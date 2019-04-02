import { Component, OnInit } from '@angular/core';
import { CProdNPro } from '../../models/CProdNPro';
import { CProdNProService } from '../../services/cprod-npro.service';
import { NgForm } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cdk-icons',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class Productos implements OnInit {
  cprodnpros: any;
  cprod: any = {
    id: 0,
    idCProdNPro: 0,
    CPNPdPro: '',
    CPNPdUni: '',
    CPNPserv: '',
    CPNPcUni: '',
    CPNPdesc: '',
    CPNPvUni: 0,
    CPNPnIden: 0,
    CPNPunidad: ''
  };

 constructor(private cprodnproService: CProdNProService, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getCProdNPro();
  }

  getCProdNPro() {
    this.cprodnproService.obtenerCProdNPro().subscribe(res => {
      this.cprodnpros = res;
    });
  }

  deleteCProdNPro(_idCProdNPro: number, form: NgForm): void {
    this.cprodnproService.eliminarCProdNPro(_idCProdNPro)
    .subscribe(res => {
      this.getCProdNPro();
      alert('Registro eliminado');
    });
  }

  addCProdNPro(form?: NgForm) {
    console.log(form.value);
     this.cprodnproService.agregarProducto(form.value)
    .subscribe(res => {
      this.getCProdNPro();
      console.log(res);
      alert('Registro agregado');
    });
  }

  mostrarCProdNPro(idCProdNPro) {
    this.cprodnproService.obtenerIdCProdNPro(idCProdNPro)
      .subscribe(
        res => {
          this.cprod = res;
        },
          err => console.log(err)
      );
  }

  updateCProdNPro(cprodnpro) {
    this.cprodnproService.putCProdNPro(cprodnpro)
    .subscribe(res => {
       this.getCProdNPro();
       alert('Registro actualizado');
    });
  }
}