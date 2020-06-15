import { Component, OnInit } from '@angular/core';
import { MaterialDetail } from 'src/app/models/material-detail';
import { MaterialDetailService } from 'src/app/services/material-detail.service';

@Component({
  selector: 'app-materialdetail-index',
  templateUrl: './materialdetail-index.component.html',
  styleUrls: ['./materialdetail-index.component.css']
})
export class MaterialdetailIndexComponent implements OnInit {
  materialdetails: MaterialDetail[];

  constructor(private _MaterialDetail: MaterialDetailService) { }

  ngOnInit(): void {
    this.listMaterial();
  }
  listMaterial() {
    this._MaterialDetail.getMaterialDetails().subscribe(
      materialdetails => this.materialdetails = materialdetails
    );
  }
}
