var numArray = [2,3,4,5,6,7,8,9,10];
numArray = numArray.filter((num)=>{
    for(let i =2;i<=num;i++){
        if(num % i === 0){
            return false;
        }
        return true;
    }
});

console.log(numArray);