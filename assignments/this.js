/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window/Global Object Binding: Whenever a function is contain in the globel scope, the value of "this" is equeal to the window object.

* 2. Implicit Binding: Whenever a function is called, the object to the left of the dot(.) is what "this" is referring to.

* 3. New Binding: Whenever a constructor function is used, the "this" keyword is referring to the specific instance of the object that is created and returned by my constructor function.

* 4. Explicit Binding: Whenever "call" or "apply" is used, "this" is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function cartoonName(name){
    console.log(this);
    return name;
}
cartoonName("Doug");

// Principle 2

// code example for Implicit Binding
const dog = {
    greeting: "woof!",
    speak: function(dogsName){
        console.log(`${dogsName} says "${this.greeting}"`);  
    }
}
dog.speak('Barky');

// Principle 3

// code example for New Binding
function sayHello(somebody){
    this.greeting = "Hey";
    this.janGreet = "Hiiii!";
    this.somebody = somebody;
    this.greet1 = function(){
        console.log(`${somebody} says "${this.greeting}"`)
    }
    this.greet2 = function(){
        console.log(`${somebody} says "${this.janGreet}"`)
    }
}

const meg = new sayHello("Meg");
const jan = new sayHello("Jan");

meg.greet1();
jan.greet2();

// Principle 4

// code example for Explicit Binding
meg.greet1.call(jan);
jan.greet2.call(meg);