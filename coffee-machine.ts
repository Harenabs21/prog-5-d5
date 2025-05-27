import { Coffee } from "./coffee";
import { CoffeeMachineException } from "./coffee-machine-exception";

export class CoffeeMachine {
    private coffees: Coffee[]
    private hasPower: boolean
    private waterLevel: number
    private balance: number

    constructor(coffees: Coffee[]){
        this.coffees = coffees;
        this.hasPower = true;
        this.waterLevel = 100;
        this.balance = 0;
    }

    getCoffees() {

        if(!this.hasPower){
            throw new CoffeeMachineException('The machine is off. Please turn it on');
        }
        return this.coffees;
    }

    togglePower(state: boolean) {
       this.hasPower = state
       console.log(`Power ${state ? 'on' : 'off'}`);
    }

    addCoffee(coffee: Coffee) {
        this.coffees.push(coffee);
        console.log(`${coffee.getName()} added to the machine.`);
    }

    removeCoffee(coffeeName: string) {
        this.coffees = this.coffees.filter(c => c.getName() !== coffeeName);
        console.log(`${coffeeName} removed from the machine.`);
    }

    refillWater(): void {
        if (!this.hasPower) {
            throw new CoffeeMachineException("The machine is off. Please turn it on.");
        }
        this.waterLevel = 100;
        console.log("Water refilled to 100%.");
    }

    insertMoney(amount: number): void {
        if (!this.hasPower) {
            throw new CoffeeMachineException("The machine is off. Please turn it on.");
        }
        this.balance += amount;
        console.log(`Inserted ${amount}. Current balance: ${this.balance}.`);
    }

    chooseCoffee(coffeeName: string): void {
        if (!this.hasPower) {
            throw new CoffeeMachineException("The machine is off. Please turn it on.");
        }

        const coffee = this.coffees.find(c => c.getName() === coffeeName);

        if (!coffee) {
            throw new CoffeeMachineException(`The coffee ${coffeeName} is not available.`);
        }

        if (this.waterLevel <= 0) {
            throw new CoffeeMachineException("The machine is out of water. Please refill.");
        }

        if (this.balance < coffee.getPrice()) {
            throw new CoffeeMachineException("Insufficient funds to afford the selected coffee.");
        }

        this.balance -= coffee.getPrice();
        this.waterLevel -= 10; 
        console.log(`Preparing ${coffeeName}... Enjoy your coffee!`);
    }

}