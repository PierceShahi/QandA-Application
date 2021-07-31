const cp = require("child_process");

const questionApp = cp.spawn("node", ["ques.js"]);

questionApp.stdin.write("Pawan Kumar Thapa \n");
questionApp.stdin.write("23 \n");
questionApp.stdin.write("Bachelor in Information Technology \n");
questionApp.stdin.write("Kathmandu, Nepal \n");
questionApp.stdin.write("Cooking, Football, and Reading \n");
questionApp.stdin.write("I love writing codes and it's in my passion \n");
questionApp.stdin.write("Yes \n");
questionApp.stdin.write("Gonna continue coding in it \n");
questionApp.stdin.write("Somewhat Yes \n");
questionApp.stdin.write("Yes very much \n");

questionApp.stdout.on("data", data =>
    {
    console.log(`\nFrom the Q&A App:\n ${data}`);
    }
);
questionApp.on("close", () =>
    {
    console.log(`Q&A_App process exited!`);
    }
);