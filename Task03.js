export function countGs(str){
    let count=0
    for (i=0;i<str.length;i+1)
        if (str.charAt(i)==="G"){
            count+=1
        }
    return count
}