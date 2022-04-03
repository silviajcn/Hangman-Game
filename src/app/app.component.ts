import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
  
export class AppComponent {

  palabra = 'SERENDIPIA';
  palabraOculta = '';

  intentos = 0;

  gano = false;
  perdio = false;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor() {
    this.palabraOculta = '_ '.repeat(this.palabra.length);
  }

  comprobar(letra: string) {

    this.existeLetra(letra);
    
    // separa el stering dentro del array
    const palabraOcultaArray = this.palabraOculta.split(' ');

    for (let i = 0; i < this.palabra.length; i++) {

      if (this.palabra[i] === letra) {
        palabraOcultaArray[i] = letra;
      }
    }

    // vuelve a juntar el string dentro del array para que las letras solo conincidad con las que ingresa la persona
    this.palabraOculta = palabraOcultaArray.join(' ');

    this.verificaGanador();
  }

  //determinar si el usuario gana o pierde dependiendo de los intentos
  verificaGanador() {

    //aqui puedo ver que la 'palabra oculta' no va a ser igual a 'palabra' porque esta separada por espacios:
    //console.log(this.palabraOculta);
    //lo que se necesita, es retornar la palabra toda pegada sin esos espacios

    const palabraArray = this.palabraOculta.split(' ');
    //console.log(palabraArray);

    const palabraEvaluar = palabraArray.join('');
    //console.log(palabraEvaluar);

    if (palabraEvaluar === this.palabra) {
      this.gano = true;
      console.log('Usuario GANO!!');
    }

    if (this.intentos >= 9) {
      this.perdio = true;
      console.log('Usuario PERDIO!!');
    }

  }

  existeLetra(letra: string) {
    //identificar si una letra existe: indexOf(), retorna la posicion de la letra que encuentre, si no la encuentra regresa '-1', si la encuentra regresa la poscion 'indice'
    if (this.palabra.indexOf(letra) >= 0) {

      //console.log('La letra: ' + letra + ' existe');

    } else {

      //console.log('La letra: ' + letra + ' no existe');

      //incrementar en '1' la cantidad de intentos si la letra no existe
      this.intentos++;

    }
  }
  
}


