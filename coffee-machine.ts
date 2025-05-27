import { Coffee } from "./coffee";

export class CoffeeMachine {
    private coffees: Coffee[]
    private hasPower: boolean

    constructor(coffees: Coffee[]){
        this.coffees = coffees;
        this.hasPower = true;
    }

    getCoffees() {
        return this.coffees;
    }

    togglePower(state: boolean) {
       this.hasPower = state
       console.log(`Power ${state ? 'on' : 'off'}`);
    }
    
}