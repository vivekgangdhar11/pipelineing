function add(a, b) {
    return a + b;
}

const result = add(2,3);

if(result === 4){
    console.log("Test Passed");
}else{
    console.log("Test Failed");
    process.exit(1);
}