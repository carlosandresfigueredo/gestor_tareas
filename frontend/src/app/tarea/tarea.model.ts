export interface tarea {
  id: string;
  idUsuario: string;
  titulo: string;
  resumen: string;

  // 🔥 IMPORTANTE: viene del backend en formato ISO
  expira: string;

  // 🔥 ESTA ERA LA CLAVE
  completada: number;
}

export interface NuevaTareaInfo {
  titulo: string;
  resumen: string;
  fecha: string;
}