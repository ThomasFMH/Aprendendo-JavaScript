//FILTER

//METODO - (FOR)
for ( var i = 1; i <= array.length; i++ ) {
    if (array.indexOf(array[i]) === i ) {
        models.push(array[i])
    }
}    

// FILTER - METODO
var uniqueProducts = array.filter( function ( elem, i , array) {
    return array.indexOf ( elem ) === i
} )


