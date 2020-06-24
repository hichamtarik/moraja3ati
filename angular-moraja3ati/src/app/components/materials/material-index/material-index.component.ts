import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'src/app/services/material.service';
import { Material } from 'src/app/models/material';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-material-index',
  templateUrl: './material-index.component.html',
  styleUrls: ['./material-index.component.css']
})
export class MaterialIndexComponent implements OnInit {
  
  materials: Material[];
  constructor(private _activeRoute: ActivatedRoute, private _MaterialService: MaterialService) { }

  ngOnInit(): void {
    this.getMaterial();
  }
  getMaterial() {
    this._MaterialService.getAll().subscribe(
       materials => this.materials = materials
    );
  }
  
  deleteMaterial(id: number) {
    
  }
  edit(id: number){
    
  }
}
