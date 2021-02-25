import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  
  public folder: string;
  public team;

  public psgPlayers = [
    {
      nom: "Kilian Mbappé",
      age: 23,
      numero: 7,
      poste: "Attaquant",
      nbMatchs: 22,
      photo : "assets/mbappe.png",
    },
    {
      nom: "Marco Verratti",
      age: 29,
      numero: 6,
      poste: "Milieu",
      nbMatchs: 16,
      photo: "assets/verratti.png",
    },
    {
      nom: "Presnel Kimpembe",
      age: 26,
      numero: 3,
      poste: "Défenseur",
      nbMatchs: 17,
      photo : "assets/kimpembe.png",
    }
  ]

  public OMPlayers = [
    {
      nom: "Gonzalez Alvaro",
      age: 31,
      numero: 2,
      poste: "Défenseur",
      nbMatchs: 24,
      photo : "assets/alvaro.png",
    },
    {
      nom: "Dimitry Payet",
      age: 33,
      numero: 8,
      poste: "Milieu",
      nbMatchs: 26,
      photo: "assets/payet.png",
    },
    {
      nom: "Florian Thauvin",
      age: 28,
      numero: 4,
      poste: "Attaquant",
      nbMatchs: 32,
      photo : "assets/thauvin.png",
    }
  ]

  public OLPlayers = [
    {
      nom: "Jason Denayer",
      age: 23,
      numero: 5,
      poste: "Défenseur",
      nbMatchs: 25,
      photo : "assets/denayer.png",
    },
    {
      nom: "Melvin Bard",
      age: 29,
      numero: 26,
      poste: "Défenseur",
      nbMatchs: 15,
      photo: "assets/bard.png",
    },
    {
      nom: "Maxwell Cornet",
      age: 26,
      numero: 27,
      poste: "Attaquant",
      nbMatchs: 20,
      photo : "assets/cornet.png",
    }
  ]

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    switch (this.folder) {
      case 'PSG':
        this.team = this.psgPlayers;
        break;
        case 'OM':
        this.team = this.OMPlayers;
        break;
        case 'OL':
        this.team = this.OLPlayers;
        break;
    }
  }


  

}
