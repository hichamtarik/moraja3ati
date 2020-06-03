import { Component, OnInit } from '@angular/core';
import { MaterialDetail } from 'src/app/models/material-detail';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {
  materialdetails: MaterialDetail[];

  constructor(private _MaterialDetail: MaterialService) { }

  ngOnInit(): void {
    this.listMaterial();
  }
  listMaterial() {
    this._MaterialDetail.getMaterials().subscribe(
       materialdetails => this.materialdetails = materialdetails
    );
  }
}
