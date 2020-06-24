import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/models/material';
import { MaterialService } from 'src/app/services/material.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-material-add',
  templateUrl: './material-add.component.html',
  styleUrls: ['./material-add.component.css']
})
export class MaterialAddComponent implements OnInit {
  
  model: Material = new Material();
  submitted = false;
  imageFile : string;

  constructor(private _MaterialService: MaterialService, private router: Router) { }

  ngOnInit(): void {
  }
  save() {
    this.model.imageUrl = this.imageFile;//this for add name of image to model
    this._MaterialService.add(this.model)
      .subscribe(data => console.log(data), error => console.log(error));
    this.gotoList();
  }

  selectFile(event) {
		this.imageFile = event.target.files[0].name;
	}
  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/materials']);
  }
}
