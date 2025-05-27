# COFFEE MACHINE SIMULATION

## Overview

The main goal of this exercise is to simulate the core functionality of a coffee machine engine. The simulation models the behavior of a coffee machine, including turning it on/off, inserting money, selecting a coffee, managing water levels, and handling errors such as insufficient funds or lack of water.

This project provides a simple and extensible framework for understanding object-oriented programming principles while applying best practices like error handling, modular design, and maintainability.

## Main Files

- [`main.ts`](main.ts): Entry point of the program. Handles display in console for testing the use cases, user coffee selection, and interaction with the coffee machine.
- [`coffee-machine-exception.ts`](coffee-machine-exception.ts): Defines the `CoffeeMachineException` that extends the `Error` interface. We use it for handling error with custom message exception in the entire app.
- [`coffee.ts`](coffee.ts): Defines the `Coffee` class, representing a type of coffee with its name and its price.
- [`coffee-machine.ts`](coffee-machine.ts): Contains the `CoffeeMachine` class, which manages the list of available coffees, ordering, and preparation.

## Conventions Use

**PascalCase**: Used for class names to clearly differentiate types and structures.

Example: CoffeeMachine, CoffeeMachineException, Coffee.

**camelCase**: Used for method and function names to maintain consistency and readability.

Example: togglePower, chooseCoffee, insertMoney.

**kebab-case**: Used for file names

Example: coffee-machine.ts

## Principles Applied

### Single Responsibility Principle (SRP)

Each class in this simulation has a single, well-defined responsibility:

CoffeeMachine: Manages the state and behavior of the coffee machine.

Coffee: Represents the data and properties of a coffee.

CoffeeMachineException: Handles exceptions specific to coffee machine operations.

By adhering to SRP, the code is easier to maintain and extend.

### DRY (Don't Repeat Yourself)

Common functionality is reused to avoid duplication. For instance:

Methods like getCoffees, togglePower, and chooseCoffee are implemented centrally in the CoffeeMachine class to manage respective behaviors without redundancy.

Error handling is consistently managed through the CoffeeMachineException class.

### Encapsulation

The use of private attributes like hasPower, coffees, balance, and waterLevel ensures that the internal state of the CoffeeMachine class is protected from unintended modifications. Public methods provide controlled access to these attributes.

### Extensibility

The design allows for future enhancements, such as:

Adding new types of coffee with different prices.

Introducing more error cases (e.g., a maintenance mode for the coffee machine).

Enhancing the simulation with real-world features like timers or operational limits.

How to Use
Clone the repository.

Compile the TypeScript files:

```bash
tsc main.ts
```

- Finally, run the compiled file with Nodejs:

```bash
node main.js
```
