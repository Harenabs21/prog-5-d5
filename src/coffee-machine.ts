import { Coffee } from './coffee';
import { CoffeeMachineException } from './coffee-machine-exception';

export class CoffeeMachine {
  private coffees: Coffee[];
  private hasPower: boolean;
  private waterLevel: number;
  private balance: number;

  constructor(coffees: Coffee[]) {
    this.coffees = coffees;
    this.hasPower = true;
    this.waterLevel = 100;
    this.balance = 0;
  }

  getCoffees() {
    try {
      if (!this.hasPower) {
        throw new CoffeeMachineException('The machine is off. Please turn it on.');
      }
      console.log('Available coffees:');
      this.coffees.forEach((coffee) => {
        console.log(`${coffee.getName()} - $${coffee.getPrice()} (${coffee.getStock()} in stock)`);
      });
    } catch (error) {
      if (error instanceof CoffeeMachineException) {
        throw new CoffeeMachineException(error.message);
      }
    }
  }

  togglePower(state: boolean) {
    this.hasPower = state;
    console.log(`Power ${state ? 'on' : 'off'}`);
  }

  refillWater(): void {
    try {
      if (!this.hasPower) {
        throw new CoffeeMachineException('The machine is off. Please turn it on.');
      }
      this.waterLevel = 100;
      console.log('Water refilled to 100%.');
    } catch (error) {
      if (error instanceof CoffeeMachineException) {
        throw new CoffeeMachineException(error.message);
      }
    }
  }

  insertMoney(amount: number): void {
    try {
      if (!this.hasPower) {
        throw new CoffeeMachineException('The machine is off. Please turn it on.');
      }
      this.balance += amount;
      console.log(`Inserted ${amount}. Current balance: ${this.balance}.`);
    } catch (error) {
      if (error instanceof CoffeeMachineException) {
        throw new CoffeeMachineException(error.message);
      }
    }
  }

  chooseCoffee(coffeeName: string): void {
    if (!this.hasPower) {
      throw new CoffeeMachineException('The machine is off. Please turn it on.');
    }

    const coffee = this.coffees.find((c) => c.getName() === coffeeName);

    if (!coffee) {
      throw new CoffeeMachineException(`The coffee ${coffeeName} is not available.`);
    }

    if (this.waterLevel <= 0) {
      throw new CoffeeMachineException('The machine is out of water. Please refill.');
    }

    if (this.balance < coffee.getPrice()) {
      throw new CoffeeMachineException('Insufficient funds to afford the selected coffee.');
    }

    try {
      coffee?.decrementStock();
      this.balance -= coffee.getPrice();
      this.waterLevel -= 10;
      console.log(`Preparing ${coffeeName}... Enjoy your coffee!`);
    } catch (error) {
      if (error instanceof CoffeeMachineException) {
        throw new CoffeeMachineException(error.message);
      }
    }
  }

  restock(coffeeName: string, quantity: number) {
    try {
      const coffee = this.coffees.find((c) => c.getName() === coffeeName);
      if (!coffee) {
        throw new CoffeeMachineException(`The coffee ${coffeeName} is not available`);
      }
      coffee?.incrementStock(quantity);
    } catch (error) {
      if (error instanceof CoffeeMachineException) {
        throw new CoffeeMachineException(error.message);
      }
    }
  }
}
