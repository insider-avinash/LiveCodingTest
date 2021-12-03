function sleep (ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
abc();

async function abc(){
    console.log("Break...");
    await sleep(6000);
    console.log("six second Later");
}