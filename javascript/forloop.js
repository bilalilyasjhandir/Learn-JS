for (let i = 0; i <= 10; i++) {
    if(i===5){
        console.log("Checkpoint");
    }
    console.log(i);    
}

for (let i = 0; i <= 5; i++) {
    console.log(`Outer loop: ${i}`);    
    for(let j = 0; j <= 5; j++){
        console.log(`Outer loop: ${i} & Inner loop: ${j}`);
    }
}

for (let i = 1; i <= 5; i++) {
    console.log(`Multiplication Table of: ${i}`);
    for(let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

const students = ["Bilal", "Ali", "Ahmad"]
for (let index = 0; index < students.length; index++) {
    const element = students[index];
    console.log(element);
}

for (let i = 1; i <= 20; i++) {
    if(i === 5){
        console.log("Endpoint!");
        break
    }
    console.log(i);
}

for (let i = 1; i <= 20; i++) {
    if(i === 5){
        console.log("Checkpoint!");
        continue
    }
    console.log(i);
}
