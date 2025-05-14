function fun(str){
    let bag=""
    for(let i=0;i<str.length;i++){
        let char=str[i]
        let charCode=char.charCodeAt(0)
        if((charCode>=65 && charCode<=90) || (charCode>=97 && charCode<=122)){
            bag+=char;
        }
    }
    console.log(bag)
    let arr=bag.toLowerCase().split('')
    let i=0;
    let j=arr.length-1;
    while(i<j){
        if(arr[i]!==arr[j]){
            return false
        }
  
        i++;
        j--
    }
    return true




}
let str="A man, a plan, a canal, Panama"
console.log(fun(str))







    // let arr=str.toLowerCase().split("")
    // let special='!@#$%^&*()" ",'
    // let ans=[]
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i]!=special[i]){
    //         ans.push(arr[i])
    //     }
    // }
    // console.log(ans)
    // // console.log(arr)
