import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Film } from 'src/models/film.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent {

  @Output() createEmitter = new EventEmitter();
  @Output() editEmitter = new EventEmitter();
  @Input() film: Film | undefined;
  @Input() selectedFilm: Film = {
    nom: '',
    annee: 0,
    realisateur: '',
    synopsis: ''
  }

  ngOnInit() {
    this.selectedFilm = this.clone(this.selectedFilm);
  }

  add() {
    this.createEmitter.emit(this.selectedFilm);
  }

  edit() {
    const toSend = this.clone(this.selectedFilm);
    this.editEmitter.emit(toSend);
  }

  private clone(value: any) {
    return JSON.parse(JSON.stringify(value));
  }
}