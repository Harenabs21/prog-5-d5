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

    setHasPower(arg: boolean) {
        return this.hasPower = arg
    }
}