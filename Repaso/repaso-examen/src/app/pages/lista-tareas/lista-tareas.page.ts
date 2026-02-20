import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TareasService } from '../../services/tareas';
import { TareaItemComponent } from '../../components/tarea-item/tarea-item.component';
// 1. Importamos las herramientas de formularios reactivos
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.page.html',
  standalone: true,
  // 2. IMPORTANTE: Añadimos ReactiveFormsModule a los imports
  imports: [IonicModule, TareaItemComponent, ReactiveFormsModule] 
})
export class ListaTareasPage {
  public tareasService = inject(TareasService);

  // 3. Creamos el objeto del formulario
  public miFormulario = new FormGroup({
    // Campo 'titulo', obligatorio y con mínimo 3 caracteres
    titulo: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  // 4. Función para añadir la tarea
  agregarTarea() {
    if (this.miFormulario.invalid) return; // Si hay errores, no hacemos nada

    const nombreTarea = this.miFormulario.controls.titulo.value;

    // Actualizamos la señal del servicio
    this.tareasService.tareas.update(lista => [
      {
        id: Date.now(), // ID temporal basado en la hora
        title: nombreTarea || '',
        completed: false,
        userId: 1
      },
      ...lista // El resto de tareas se mantienen debajo
    ]);

    this.miFormulario.reset(); // Limpiamos el cuadrito de texto
  }

  cambiarEstado(id: number) {
    this.tareasService.tareas.update(lista => 
      lista.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    );
  }
}