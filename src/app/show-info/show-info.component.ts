import { Component } from '@angular/core';
import { ReciveService } from '../library/service/recive.service';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.scss']
})
export class ShowInfoComponent {
  public dataAll: any;
  constructor(private pubSubService: ReciveService) {}

  ngOnInit(): void {
    // Suscribirse a un evento desde el Shell
    this.pubSubService.subscribe('eventoShell', (_msg: string, data: any) => {

      console.log('Evento recibido en el Remote:', data);
    });

  }

  enviarEventoAlShell(): void {
    // Publicar un evento para el Shell
    this.pubSubService.publish('eventoRemoto', { message: 'Hola desde el Remote' });
  }
}
