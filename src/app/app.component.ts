import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Acceuil', url: '/folder/Acceuil' },
    { title: 'PSG', url: '/folder/PSG', icon: 'assets/psg.png' },
    { title: 'OL', url: '/folder/OL', icon: 'assets/ol.png' },
    { title: 'OM', url: '/folder/OM', icon: 'assets/om.png' },
  ];
  constructor() {}
}
