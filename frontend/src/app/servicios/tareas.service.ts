import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tarea,NuevaTareaInfo } from '../tarea/tarea.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private API_URL = 'https://gestortareas-production-4b05.up.railway.app/';

  constructor(private http: HttpClient) {}

  obtenerTareasDeUsuario(idUsuario: string) {
  const url = `${this.API_URL}?idUsuario=${idUsuario}`;
  console.log('URL REAL:', url);
  return this.http.get<tarea[]>(url);
}

  crearTarea(data: NuevaTareaInfo, idUsuario: string) {
    return this.http.post(this.API_URL, {
      id: Date.now().toString(),
      titulo: data.titulo,
      resumen: data.resumen,
      expira: data.fecha,
      idUsuario,
      completada: 0
    });
  }

  completar(id: string) {
    return this.http.put(`${this.API_URL}/${id}`, {});
  }

  eliminar(id: string) {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}