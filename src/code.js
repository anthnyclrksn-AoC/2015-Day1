let fs = require('fs');

//Part 1
try {
    let data = fs.readFileSync('./src/floorDirections.txt', 'utf8');
    let splitData = data.split('');
    let floorCount = 0
    for(let i = 0; i < splitData.length; i++) {
        if(splitData[i] === '(') {
            floorCount = floorCount + 1
        } else {
            floorCount = floorCount - 1
        };
    }; console.log(floorCount);
} catch (error) {
    console.log(`Error: ${error.stack}`);
};

//Part2
try {
    let data = fs.readFileSync('./src/floorDirections.txt', 'utf8');
    let splitData = data.split('');
    let floorCount = 0
    let i = 0;
    while(floorCount != -1) {
        if(splitData[i] === '(') {
            floorCount = floorCount + 1
        } else {
            floorCount = floorCount - 1
        };
        i++;
    }; console.log(i);
} catch (error) {
    console.log(`Error: ${error.stack}`);
};
