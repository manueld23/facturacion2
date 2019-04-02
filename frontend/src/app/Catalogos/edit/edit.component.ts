import { Component, OnInit } from '@angular/core';
import { CProdNPro } from '../../models/CProdNPro';
import { CProdNProService } from '../../services/cprod-npro.service';
import { NgForm } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Numeric } from 'd3';
import { id } from '@swimlane/ngx-charts/release/utils';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

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
    const params = this.route.snapshot.params;
    if (params.id) {
      this.cprodnproService.obtenerIdCProdNPro(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.cprod = res;
          },
          err => console.log(err)
        );
    }
  }

  updateCoin() {
    this.route.params.subscribe(params => {
    this.cprodnproService.putCProdNPro(params['id']);
  });
}

}
