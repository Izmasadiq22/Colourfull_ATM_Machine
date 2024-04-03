import inquirer from  "inquirer";
import chalk from "chalk";

//initialize user balance and pincode
let myBalance = 5000;
let myPin = 1234;

//print welcome message
console.log(chalk.blue("\n \tWelcome to code with izma - ATM Machine\n"));

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter yourr pin code:")
    }
]) 
if (pinAnswer.pin === myPin){
    console.log(chalk.green("\nPin is correct, login successfully\n"));


    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation:",
            choices: ["WithDraw Amount", "Check balance"]
        }
   ])

    if(operationAns.operation === "WithDraw Amount"){
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "Select a wihdrawal method:",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ])
        if(withdrawAns.withdrawMethod === "Fast Cash"){
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "Select Amount:",
                    choices: [1000, 2000, 5000, 10000, 50000]
                }
            ])
            if(fastCashAns.fastCash < myBalance){
                console.log(chalk.red("Insufficint Balance"));
            }
            else{
                myBalance -= fastCashAns.fashCash
                console.log(`${fastCashAns.fastCash} withdraw successfully`);
                console.log(`Your Rmaining Balance is: ${myBalance}`);
            }
            
        }
        
        else if(withdrawAns.withdrawMethod === "Enter Amount" ){
            let amountAns = await inquirer.prompt([
                {
                    name:"amount",
                    type: "number",
                    message: "Enter the amount to withdraw:"
                }
             ])
             if(amountAns.amount > myBalance){
                console.log("Insufficient Balance");
             }
             else{
                  myBalance -= amountAns.amount;
                  console.log(`${amountAns.amount} Withdraw Successfully`);
                  console.log(`Your remaining balance is: ${myBalance}`)
            }

        }
        

    }
    else if (operationAns.operation === "Check Balance"){
        console.log(`Your Account Balance is: ${myBalance}`);
    }
}
else{
console.log(chalk.red("Pin is Incorrect,Try Again"));
}