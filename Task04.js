export function fizzBuzz(num){
    let text=""
    for (let i=1;i<num;i++)
        
            if (i%3===0 && i%5===0){
                text+="FizzBuzz, "
            }
            else if (i%3===0){
                text+="Fizz, "
            }
            else if(i%5===0){
                text+="Buzz, "
            }
            else{
                text+=i
                text+=", "
            }
        console.log(text)
}