

class Animal {
    sayHello() {
        return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
    // sayHello(){
    //     console.log("Hello, i am "+this.name);
}
Animal.greeting=`Bonjour`;
let object1 = new Animal(); 
object1.name="Dog";

let object2= new Animal();
object2.name="Cat";


console.log(object1.sayHello());
console.log(object2.sayHello());
