// Exportamos la interfaz para poder usarla en otros archivos
export interface Tarea {
    userId: number;   // ID del usuario que creó la tarea
    id: number;       // ID único de la tarea
    title: string;    // El texto de la tarea
    completed: boolean; // Si está hecha (true) o no (false)
}