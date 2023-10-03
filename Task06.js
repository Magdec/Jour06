export function objectsDeeplyEqual ( cmp1, cmp2 ) {
    if ( cmp1 === cmp2) return true

    let v1keys = Object.keys(cmp1)
    let v2keys = Object.keys(cmp2)

    if (v1keys.length != v2keys.length) return false

    for (let key of v1keys){
        if (!v2keys.includes(key) || !objectsDeeplyEqual(cmp1[key],cmp2[key])) return false
    }
    return true
}