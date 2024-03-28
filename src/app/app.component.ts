import { Component } from '@angular/core';
import { ReciveService } from './library/service/recive.service';

@Component({
  selector: 'app-root2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mfClient';

  public dataAll: any;
  constructor(private pubSubService: ReciveService) {}

  ngOnInit(): void {
    // Suscribirse a un evento desde el Shell
    this.pubSubService.subscribe('eventoShell', (_msg: string, data: any) => {
      this.dataAll.push(data);
      console.log(this.dataAll);
    });
  }
}
