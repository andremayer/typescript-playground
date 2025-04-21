const { BookMyShow } = require("./BookMyShow");

const actions = ["BookMyShow", "gather", "gather", "scatter", "scatter"];
const inputs = [[2, 5], [4, 0], [2, 0], [5, 1], [5, 1]];
const expected = [null, [0, 0], [], true, false];

const output: any[] = [];

let bms: any = null;

for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const input = inputs[i];

    switch (action) {
        case "BookMyShow":
            bms = new BookMyShow(input[0], input[1]);
            output.push(null);
            break;
        case "gather":
            output.push(bms.gather(input[0], input[1]));
            break;
        case "scatter":
            output.push(bms.scatter(input[0], input[1]));
            break;
    }
}

console.log("Expected:", JSON.stringify(expected));
console.log("Output:  ", JSON.stringify(output));
console.log("Match: ", JSON.stringify(expected) === JSON.stringify(output));