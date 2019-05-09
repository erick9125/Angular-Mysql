import { Component, OnInit, HostBinding } from '@angular/core';
import { JuegosService } from '../../services/juegos.service';

@Component({
  selector: 'app-juego-list',
  templateUrl: './juego-list.component.html',
  styleUrls: ['./juego-list.component.css']
})
export class JuegoListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  juegos: any = [];

  constructor(private juegoService: JuegosService) { }

  ngOnInit() {
    this.getJuegos();
  }

  getJuegos(){
    this.juegoService.getJuegos().subscribe(
      res=> {
        this.juegos = res;
      },
      err => console.error(err)
    );
  }

  eliminarJuego(id: string){
    this.juegoService.deleteJuego(id).subscribe(
      res => {
        console.log(res);
        this.getJuegos();
      },
      err => console.error(err)
    )
  }

}
