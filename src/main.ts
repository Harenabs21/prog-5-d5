import { Coffee } from './coffee';
import { CoffeeMachine } from './coffee-machine';

const espresso = new Coffee('Espresso', 5, 10);
const latte = new Coffee('Latte', 6, 8);
const cappuccino = new Coffee('Cappuccino', 7, 5);

const coffeeMachine = new CoffeeMachine([espresso, latte, cappuccino]);

try {
  console.log('Displaying available coffees:');
  coffeeMachine.getCoffees();

  console.log('\nInserting money:');
  coffeeMachine.insertMoney(10);

  console.log('\nChoosing a coffee:');
  coffeeMachine.chooseCoffee('Latte');

  console.log('\nDisplaying remaining coffees:');
  coffeeMachine.getCoffees();

  console.log('\nRefilling water:');
  coffeeMachine.refillWater();

  console.log('\nRestocking Cappuccino:');
  coffeeMachine.restock('Cappuccino', 10);

  console.log('\nDisplaying updated coffees:');
  coffeeMachine.getCoffees();

  console.log('\nTurning off the coffee machine:');
  coffeeMachine.togglePower(false);

  console.log('\nAttempting to use the machine when it is off:');
  coffeeMachine.getCoffees();
} catch (error: any) {
  console.error(`Error: ${error.message}`);
}
