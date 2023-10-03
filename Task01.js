export function drawTriangle(height){
    let width=0
    while (width<=height){
        let Text=""
        while(Text.length<=width){
            Text+="$"
        }
        console.log(Text)
        width+=1
    }
}