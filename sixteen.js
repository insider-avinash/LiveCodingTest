function SumOfArray(a,b){
    let c =[];
    for(let i=0;i<Math.max(a.length, b.length);i++){
        c.push(a[i] +b[i])
    }
    return c;
}
const a =[1,2,3,4,5];
const b = [6,7,8,9,10];
console.log(SumOfArray(a,b));