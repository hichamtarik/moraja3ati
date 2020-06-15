import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'src/app/services/material.service';
import { Material } from 'src/app/models/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-material-index',
  templateUrl: './material-index.component.html',
  styleUrls: ['./material-index.component.css']
})
export class MaterialIndexComponent implements OnInit {
  materials: Material[];

  constructor(private _activeRoute: ActivatedRoute, private _MaterialService: MaterialService) { }

  ngOnInit(): void {
    this.getListMaterial();
  }
  getListMaterial() {
    this._MaterialService.getMaterials().subscribe(
       materials => this.materials = materials
    );
  }
  getMaterialById(){
    const id: number = +this._activeRoute.snapshot.paramMap.get('id');
    this._MaterialService.get(id).subscribe(
        materials => {console.log(materials);}
    );
  }
}
