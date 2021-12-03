const arr = [1,2,3,4,5,6];
function maxelement(){
let i=0;
let max = arr[i];

for(let i=0;i<arr.length;++i){
    if(max<arr[i])
    max=arr[i];
}
return max;
}

function minElement(){
    let i=0;
    let min =arr[i];

    for(let i=0;i<arr.length;++i){
        if(min>arr[i]){
            min=arr[i];
        }
    }
    return min;
}

console.log(maxelement()+minElement());





