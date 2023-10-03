export function range ( start, end, step ) {
    let array = []
    if ( step > 0 ) {
        for ( let i = start; i <= end; i += step ) {
            array . push ( i )
        }
    }
    else if ( step < 0 ){
        for ( let i = start; i >= end; i += step ) {
            array . push ( i )
        }
    }
    else {
        for ( let i = start; i <= end; i++ ) {
            array . push ( i )
        }
    }
    
    return array 
}