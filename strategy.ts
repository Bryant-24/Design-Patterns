class Duck {
    flyStrategy: FlyBehavior
    quackStrategy: QuackBehavior
    
    constructor(
		flyBehavior: FlyBehavior, 
		quackBehavior: QuackBehavior
	) {
        this.flyStrategy = flyBehavior
        this.quackStrategy = quackBehavior
	}
    
    swim() {
		console.log("Let's swim!")
    }
    
    display() {
        console.log("Simple display, nothing else")
    }
    
    performFly() {
        this.flyStrategy.fly()
    }
    
    performQuack() {
        this.quackStrategy.quack()
    }
}

interface FlyBehavior {
    fly: () => void
}

class FlyWithWings implements FlyBehavior {
    fly() {
        console.log("I can fly!")
    }
}

class FlyNoWay implements FlyBehavior {
    fly() {
        console.log("I can't fly!")
    }
}

interface QuackBehavior {
    quack: () => void
}

class Quack implements QuackBehavior {
    quack() {
        console.log("Quack!")
    }
}

class MuteQuack implements QuackBehavior {
    quack() {
        console.log("<< Silence >>")
    }
}

class Squeak implements QuackBehavior {
    quack() {
        console.log("Squeak")
    }
}

class MallardDuck extends Duck {
    display() {
        console.log("I'm real a Mallard duck")
    }
}

let mallardDuck = new MallardDuck(new FlyWithWings(), new Quack())
mallardDuck.performFly()
mallardDuck.performQuack()
mallardDuck.display()

let simpleDuck = new Duck(new FlyNoWay(), new Squeak())
simpleDuck.performFly()
simpleDuck.performQuack()
simpleDuck.display()