const collectAnswers = require("./lib/collectAnswers");

const questions = [
    "\nHello \nWelcome to the Survey! \nPlease answer the following questions. \n\nWhat is your name? ",
    "\nHow old are you? ",
    "\nWhat's your education? ",
    "\nWhere do you live? ",
    "\nWhat are your hobbies? ",
    "\nWhy do you wanna become a programmer? ",
    "\nDo you find life meaning full? ",
    "\nWhat are you going to do with node js? ",
    "\nDid you find Node js fun to work with? ",
    "\nDid you find this survey worth doing? "
];

const answerEvents = collectAnswers(questions, answers =>
    {
    console.log("Thank You");
    console.log(answers);
    process.exit();
    }
);

answerEvents.on("answer", answer =>
    console.log(`Ans: ${answer}`)
);

answerEvents.on("complete", answers =>
    {
    console.log("\nThank You for your answers.\nPlease go through your answers.\n\n");
    console.log(answers);
    }
);

answerEvents.on("complete", () => process.exit());
process.on('exit', () =>
    {
    console.log(`HAVE A NICE DAY.!`);
    }
);