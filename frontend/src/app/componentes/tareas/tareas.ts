import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Tarea } from "../../tarea/tarea";
import { NuevaTarea } from "../nueva-tarea/nueva-tarea";
import { TareasService } from '../../servicios/tareas.service';
import { tarea } from '../../tarea/tarea.model';

@Component({
  selector: 'app-tareas',
  imports: [Tarea, NuevaTarea],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas implements OnChanges {

  @Input() nombre!: string;
  @Input() idUsuario!: string;

  tareas: tarea[] = [];
  mostrarForm = false;

  constructor(private service: TareasService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['idUsuario']) {
      this.tareas = [];
      this.cargar();
    }
  }

  cargar() {
    this.service.obtenerTareasDeUsuario(this.idUsuario).subscribe(data => {

      const nuevas = data.filter(
        t => t.idUsuario === this.idUsuario && Number(t.completada) === 0
      );

      // FORZAR NUEVA REFERENCIA
      this.tareas = [...nuevas];
    });
  }

  abrirForm() {
    this.mostrarForm = true;
  }

  cerrarForm() {
    this.mostrarForm = false;

    // ESPERAR BACKEND
    setTimeout(() => {
      this.cargar();
    }, 150);
  }

  completar(id: string) {
    this.service.completar(id).subscribe(() => {

      // UI inmediata
      this.tareas = this.tareas.filter(t => t.id !== id);

      //  sincroniza después
      setTimeout(() => {
        this.cargar();
      }, 100);
    });
  }

  eliminar(id: string) {
    this.service.eliminar(id).subscribe(() => {

      this.tareas = this.tareas.filter(t => t.id !== id);

      setTimeout(() => {
        this.cargar();
      }, 100);
    });
  }
}