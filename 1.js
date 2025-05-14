function fun(str){
    let vol="aeiou"
    let str1=str.toLowerCase()
    let count=0
    let count1=0
    for(let i=0;i<str1.length;i++){
        if(vol.includes(str[i])){
            count=count+1
        }
        else{
            count1=count1+1
        }
    }
    console.log(count1)
    console.log(count)

}
let str="Hello World"
fun(str)