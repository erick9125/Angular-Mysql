import { Component, OnInit, HostBinding } from '@angular/core';
import { Juego } from 'src/app/models/Juego';
import { JuegosService } from '../../services/juegos.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  edit: boolean = false;

  constructor(private juegoService: JuegosService , private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if(params.id){
      this.juegoService.getJuego(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.juego = res;
            this.edit = true;
          },
          err => console.error(err)
        )
    }
  }

  guardarNuevoJuego(){
    delete this.juego.created_at;
    delete this.juego.id;

    this.juegoService.saveJuego(this.juego)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/games']);
        },
        err => console.error(err)
      )
    }

    actualizarJuego(){
      delete this.juego.created_at;
      this.juegoService.updateJuego(this.juego.id, this.juego)
        .subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/games']);
          },
          err => console.log(err)
        )
    }
}
