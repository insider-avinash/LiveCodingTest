function abc(s){
    var temp =[];
    var res = [];
    for(let i=0;i<s.length;i++){
        temp = [s[i]];
        var index = 0;
        while(res[index]){
            temp.push(" "+res[index]+s[i]);
            index++;
        }
        res =res.concat(temp);
    }
    return res;
}
console.log(abc("dog"));