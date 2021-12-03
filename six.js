function abc(){
var a =32243;
var sum=0;
var rem;
while(a>0){
    rem=a%10;
    sum=sum*10+rem;
    a=parseInt(a/10);
}
console.log(sum);
}

abc();

