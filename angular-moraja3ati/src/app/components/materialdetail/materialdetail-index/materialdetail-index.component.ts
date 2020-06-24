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
    this.getMaterial();
  }
  getMaterial() {
    this._MaterialDetail.getAll().subscribe(
      materialdetails => this.materialdetails = materialdetails
    );
  }
  updateMaterial(id: number) {

  }
  deleteMaterial(id: number) {

  }
}
