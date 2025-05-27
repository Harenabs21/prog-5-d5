import { Coffee } from "./coffee";
import { CoffeeMachineException } from "./coffee-machine-exception";

export class CoffeeMachine {
    private coffees: Coffee[]
    private hasPower: boolean

    constructor(coffees: Coffee[]){
        this.coffees = coffees;
        this.hasPower = true;
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

}