import {pedirCarta, valorCarta,crearCartaHTML} from './'


/**
 * turno de la computadora
 * @param {Number} puntosMinimos que la computadora necesita para ganar
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar los puntos
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * 
 * @param {Array<String>} deck 
 */

export const turnoComputadora = ( puntosMinimos,puntosHTML, divCartasComputadora, deck = []) => {


    if (!puntosMinimos) throw new Error('Puntos minimos son necesarios')
    if (!puntosHTML) throw new Error('Argumento puntosHTML es necesario')

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML(carta)      


        // <img class="carta" src="assets/cartas/2C.png">
        
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
