const metodoPago = 'tarjeta';

switch (metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'bitcoin':
        console.log('Pagaste con bitcoin');
        break;
    case 'cheque':
        console.log('Pagaste con un cheque');
        break;
    case 'efectivo':
        console.log('Pagaste con efectivo');
        break;
    default:
        console.log('Aun no has pagado');
        break;
}