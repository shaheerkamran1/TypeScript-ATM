import inquirer from "inquirer"
import chalk from "chalk"
/* This somewhat complex TypeScript/Node.js project is
 a console-based application. When the system starts the user 
 is prompted with a user id and user pin. After entering the details successfully, 
 the ATM functionalities are unlocked. All the user data is generated randomly. */

const green = chalk.greenBright.bold
const red = chalk.redBright.bold
const yellow = chalk.yellowBright.bold
const blue = chalk.blueBright
 
console.log("\n\n\n")
console.log(green("      _/_/    _/_/_/_/_/  _/      _/      _/_/_/                        _/                        _/      "));
console.log(green("   _/    _/      _/      _/_/  _/_/      _/    _/  _/  _/_/    _/_/          _/_/      _/_/_/  _/_/_/_/   ")); 
console.log(green("  _/_/_/_/      _/      _/  _/  _/      _/_/_/    _/_/      _/    _/  _/  _/_/_/_/  _/          _/        "));
console.log(green(" _/    _/      _/      _/      _/      _/        _/        _/    _/  _/  _/        _/          _/         ")); 
console.log(green("_/    _/      _/      _/      _/      _/        _/          _/_/    _/    _/_/_/    _/_/_/      _/_/      "));
console.log(green("                                                                   _/                                     "));
console.log(green("                                                                _/                                     "));

console.log("\n\n\n")  
console.log(chalk.blueBright("┳┓      ┓       ┓  ┓     ┏┓┓   ┓       "))
console.log(chalk.blueBright("┃┃┏┓┓┏┏┓┃┏┓┏┓┏┓┏┫  ┣┓┓┏  ┗┓┣┓┏┓┣┓┏┓┏┓┏┓"))
console.log(chalk.blueBright("┻┛┗ ┗┛┗ ┗┗┛┣┛┗ ┗┻  ┗┛┗┫  ┗┛┛┗┗┻┛┗┗ ┗ ┛ "))
console.log("\n\n\n")  

let credentials = await inquirer.prompt([{
    name:"id",
    type:"number",
    message:green("Input your ID number: "),
},

{
    name:"pin",
    type:"password",
    message:green("Input your pin: "),
}])

let {id,pin} = credentials


let balance:number = 20000;                        // User has by default 200000
let amount:number

async function promptUser(){
let atmFunction = await inquirer.prompt([{
    name:"choice",
    type:"list",
    message:blue("What operation would you like to perform ?"),
    choices:["1. Deposit Cash", "2. Withdraw Cash", "3. Transfer Funds", "4. Balance Inquiry", "5. Exit"]
}])

switch(atmFunction.choice)
{
    case "1. Deposit Cash":{
            
        let deposit =  await inquirer.prompt([{
        
            name:"amount",
            type:"number",
            message:blue("Input your amount to be sent: "),
            
        }])

        amount = deposit.amount
        balance+=amount

        console.log(green(`\nYour Account id: ${id}\n`));
        console.log(green(`Your deposited amount: ${amount}\n`));
        console.log(yellow(`Your updated balance is: ${balance}\n`));

        promptUser()
        break;
    }
        
        case "2. Withdraw Cash":{
            let withdraw = await inquirer.prompt([{
                name: "cash",
                type:"list",
                choices:["Rs 500","Rs 1000","Rs 2000","Rs 5000","Rs 10000","Rs 20000", "Enter manually"],
                message:blue("Enter your amount: ")
            }])
      
            switch(withdraw.cash)
            {
                case "Rs 500":
                {
                    if(withdraw.cash==="Rs 500" && balance!=0)
                    {         
                        console.log(yellow("\nProcessing, please wait...."));                        
                        balance-=500
                        console.log(green("Fetch out your Rs 500 from dispenser\n"));
                        break;
                    }

                    else if(balance<500)
                    {
                        console.log(red("\nYou do not have enough balance in your account.\n"));
                        break;
                    } 
                }

                case "Rs 1000":
                {
                    if(withdraw.cash==="Rs 1000" && balance!=0)
                    {
                        
                        console.log(yellow("\nProcessing, please wait...."));                       
                        balance-=1000
                        console.log(green("Fetch out your Rs 1000 from dispenser\n"));
                        break;
                        
                    }

                    else if(balance<1000)
                    {
                        console.log(red("\nYou do not have enough balance in your account.\n"));
                        break;
                    } 
                }

                case "Rs 2000":
                {
                    if(withdraw.cash==="Rs 2000" && balance!=0)
                    {
                        
                        console.log(yellow("\nProcessing, please wait...."));
                        balance-=2000
                        console.log(green("Fetch out your Rs 2000 from dispenser\n"));
                        break;
                        
                    }

                    else if(balance<2000 || balance<=0)
                    {
                        console.log(red("\nYou do not have enough balance in your account.\n"));
                        break;
                    }
                }

                case "Rs 5000":
                {
                    if(withdraw.cash==="Rs 5000" && balance!=0)
                    {
                        
                        console.log(yellow("\nProcessing, please wait...."));                      
                        balance-=5000
                        console.log(green("Fetch out your Rs 5000 from dispenser\n"));
                        break;
                    }

                    else if(balance<5000 || balance<=0)
                    {
                        console.log(red("\nYou do not have enough balance in your account.\n"));
                        break;
                    } 
                }

                case "Rs 10000":
                {
                    if(withdraw.cash==="Rs 10000" && balance!=0)
                    {
                        
                        console.log(yellow("\nProcessing, please wait....")); 
                        balance-=10000
                        console.log(green("Fetch out your Rs 10000 from dispenser\n"));
                        break;
                       
                    }


                    else if(balance<10000 || balance<=0)
                    {
                        console.log(red("\nYou do not have enough balance in your account.\n"));
                        break;
                    }                 
                }

                case "Rs 20000":
                {
                    if(withdraw.cash==="Rs 20000" && balance!=0)
                    {
                        
                        console.log(yellow("\nProcessing, please wait...."));
                        balance-=20000
                        console.log(green("Fetch out your Rs 20000 from dispenser\n"));
                        break;
                        
                    }

                    else if(balance<20000 || balance<=0)
                    {
                        console.log(red("\nYou do not have enough balance in your account.\n"));
                        break;
                    } 
                }

                case "Enter manually":
                {
                    if(withdraw.cash==="Enter manually" && balance!=0)
                    {
                        let manualAmount = await inquirer.prompt([{
                            name:"amount",
                            type:"number",
                            message:blue("Input your amount: \n")
                        }])
    
                        if(manualAmount.amount>=500 && manualAmount.amount<=20000  && balance!=0)
                        {
                            console.log(yellow("\nPlease wait...."));
                            balance-=<number>manualAmount.amount
                            console.log(green(`Fetch out your Rs ${manualAmount.amount} from dispenser\n`));
                            break;
                        }
                        
                        if(balance<=0)
                        {
                            console.log(red("\nSorry, Your transaction can't be processed balance is Rs 0.00\n"));
                            break;
                        }
        
    
                        else if (manualAmount.amount<500)
                        {
                            console.log(red("\nPlease enter a higher amount\n"));
                            break;

                        }
    
                        else if (manualAmount.amount>20000)
                        {
                            console.log(red("\nCan't exceed amount of Rs 20000\n"));
                            break;
                        }
                    }
                }
            }
        promptUser();
        break;
    }

    case "3. Transfer Funds":{
        let receiver_acc = await inquirer.prompt([
        {
            name:"name",
            type:"string",
            message:blue("Enter receiver's name: "),
        },

        {
            name:"no",
            type:"number",
            message:blue("Enter the sender account number")
        },

        {
            name:"outgoing_amount",
            type:"number",
            message:blue("Enter the amount to be sent:")
        }])

        if(receiver_acc.outgoing_amount<=balance && balance !=0)
        {
            balance-=receiver_acc.outgoing_amount   
            console.log(green(`\nRs ${receiver_acc.outgoing_amount} trasferred to ${receiver_acc.name} ${receiver_acc.no} `));
            console.log(yellow(`Your current account balance: ${balance}\n`));
        }

        else if(receiver_acc.outgoing_amount>balance)
        {
            console.log(red(`\nYour transaction can't be processed, insufficient balance.`));
            console.log(yellow(`Current Balance: ${balance}\n`));
            promptUser();
            break;
        }
        promptUser();
        break;
    }
    
    case "4. Balance Inquiry":{
       
        console.log(yellow(`\nAccount No: ${id}`));
        console.log(yellow(`Current Balance: ${balance}\n`));

        promptUser();
        break;
    }
    
    case "5. Exit":{
        console.log(blue("\nThank you for using ATM "));
        break;
    }

    default :{
        console.log(blue("Nothing"));
        break;
    }
}}

promptUser()