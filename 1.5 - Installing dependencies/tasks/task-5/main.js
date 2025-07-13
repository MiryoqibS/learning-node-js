/*
== Задача 5 == 
установи первую библиотеку 
npm install chalk

Установи вторую библиотеку и используй оба
npm install cowsay
*/

import chalk from "chalk";
import cowsay from "cowsay";

console.log(chalk.cyan("Программа запущена!"));
console.log(
    cowsay.say({
        text: "Hello from cowsay!",
        e: "^^",
        T: "U ",
    })
);