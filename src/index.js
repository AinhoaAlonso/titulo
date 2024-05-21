'use strict';

import moment from 'moment';

exports.generarTitulo = function(){
    const fecha = moment();
    return `Hoy es el dia ${fecha} `;
}
