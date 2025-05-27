import { CoffeeMachine } from "./coffee-machine";
import { Coffee } from "./coffee";
import { CoffeeMachineException } from "./coffee-machine-exception";

function main() {
    // Mock Coffee objects
    const espresso = { getName: () => "Espresso", getPrice: () => 30 } as Coffee;
    const latte = { getName: () => "Latte", getPrice: () => 40 } as Coffee;

    // Initialize CoffeeMachine
    const machine = new CoffeeMachine([espresso, latte]);

    try {
        console.log("=== Coffee Machine Simulation ===");

        // Display available coffees
        console.log("Available coffees:", machine.getCoffees().map(c => c.getName()));

        // Insert money
        console.log("\nInserting money...");
        machine.insertMoney(50);

        // Choose a coffee
        console.log("\nChoosing Espresso...");
        machine.chooseCoffee("Espresso");

        // Show remaining balance
        console.log("\nRemaining balance:", machine["balance"]);

        // Refill water
        console.log("\nRefilling water...");
        machine.refillWater();

        // Turn off the machine and try to use it
        console.log("\nTurning off the machine...");
        machine.togglePower(false);
        console.log("Trying to get coffees with the machine off...");
        try {
            machine.getCoffees();
        } catch (error) {
            if (error instanceof CoffeeMachineException) {
                console.error("Caught error:", error.message);
            }
        }

        // Turn on the machine
        console.log("\nTurning the machine back on...");
        machine.togglePower(true);

        // Add a new coffee
        const cappuccino = { getName: () => "Cappuccino", getPrice: () => 50 } as Coffee;
        machine.addCoffee(cappuccino);
        console.log("Available coffees:", machine.getCoffees().map(c => c.getName()));

        // Remove a coffee
        machine.removeCoffee("Latte");
        console.log("Available coffees after removing Latte:", machine.getCoffees().map(c => c.getName()));

        console.log("\n=== End of Simulation ===");
    } catch (error) {
        if (error instanceof CoffeeMachineException) {
            console.error("Error:", error.message);
        } else {
            console.error("Unexpected error:", error);
        }
    }
}

main();
