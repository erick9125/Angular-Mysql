import { Component, OnInit, HostBinding } from '@angular/core';
import { Juego } from 'src/app/models/Juego';
import { JuegosService } from '../../services/juegos.service';

@Component({
  selector: 'app-juego-form',
  templateUrl: './juego-form.component.html',
  styleUrls: ['./juego-form.component.css']
})
export class JuegoFormComponent implements OnInit {

@HostBinding('class') classes = 'row';

juego: Juego = {
  id: 0,
  titulo: '',
  descripcion: '',
  imagen: '',
  created_at: new Date()
};

  constructor(private juegoService: JuegosService) { }

  ngOnInit() {
  }

  guardarNuevoJuego(){
    delete this.juego.created_at;
    delete this.juego.id;

    this.juegoService.saveJuego(this.juego)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      )
    }

}
