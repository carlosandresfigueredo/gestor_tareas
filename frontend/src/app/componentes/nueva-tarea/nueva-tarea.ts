import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from '../../servicios/tareas.service';

@Component({
  selector: 'app-nueva-tarea',
  imports: [FormsModule],
  templateUrl: './nueva-tarea.html',
  styleUrl: './nueva-tarea.css',
})
export class NuevaTarea {

  @Input() idUsuario!: string;
  @Output() cerrar = new EventEmitter<void>();

  titulo = '';
  resumen = '';
  fecha = '';

  private service = inject(TareasService);

  guardar() {
    this.service.crearTarea({
      titulo: this.titulo,
      resumen: this.resumen,
      fecha: this.fecha
    }, this.idUsuario).subscribe(() => {
      this.cerrar.emit();
    });
  }
}