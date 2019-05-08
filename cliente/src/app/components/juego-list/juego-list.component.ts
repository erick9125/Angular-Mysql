import { Component, OnInit } from '@angular/core';
import { JuegosService } from '../../services/juegos.service';

@Component({
  selector: 'app-juego-list',
  templateUrl: './juego-list.component.html',
  styleUrls: ['./juego-list.component.css']
})
export class JuegoListComponent implements OnInit {

  juegos: any = [];

  constructor(private juegoService: JuegosService) { }

  ngOnInit() {
    this.juegoService.getJuegos().subscribe(
      res=> {
        this.juegos = res;
      },
      err => console.error(err)
    )
  }

}
