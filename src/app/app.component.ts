import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Lalinho';
  nombre2: string = 'JuAn PeReZ SaNcHeZ';
  arreglo: number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  PI: number = 3.14159265359;
  a: number = 0.231;
  salario: number = 20500.50;

  fecha = new Date( 1991, 1, 26 );

  video: string = 'BfOdWSiyWoc';

  contrasenaActiva: boolean = true;

  heroe =
  {
    nombre: 'Peter Parker',
    clave: 'Spiderman',
    edad: 28,
    direccion:
    {
      calle: 'Segunda',
      casa: 'Primera'
    }
  }

  valorDePromesa = new Promise( ( resolve, reject ) => {
  	setTimeout( () => resolve( 'Datos asíncoronos' ), 3500 );
  });
}
