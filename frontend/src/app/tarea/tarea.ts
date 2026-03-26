import { Component, EventEmitter, Input, Output } from '@angular/core';
import { tarea } from './tarea.model';
import { Tarjeta } from '../componentes/tarjeta/tarjeta';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tarea',
  imports: [Tarjeta, DatePipe],
  templateUrl: './tarea.html',
  styleUrl: './tarea.css',
})
export class Tarea {

  @Input() tarea!: tarea;

  @Output() completar = new EventEmitter<string>();
  @Output() eliminar = new EventEmitter<string>();

}