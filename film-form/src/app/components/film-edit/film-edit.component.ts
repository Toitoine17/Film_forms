import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-film-edit',
  templateUrl: './film-edit.component.html',
  styleUrls: ['./film-edit.component.scss']
})
export class FilmEditComponent implements OnInit {
  filmForm: FormGroup = this.fb.group({
    titre: ['', Validators.required],
    synopsis: ['', [Validators.required, Validators.minLength(5)]],
    annee: ['', [Validators.required, Validators.min(1895)]],
    realisateur: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }
}