export function arrayFiltering(array, test){
    let array2=[]
    for (let i=0 ; i< (array.length) ; i++)
        if (test(array[i])===true){
        array2.push(array[i])
        }
    return array2
}