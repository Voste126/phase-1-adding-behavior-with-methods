// Your code here
//cat = new Cat("Sasha", "female")
class cat{
    constructor(name,sex){
        this.name = name;
        this.sex= sex;
        this.speak = () => {
            return `${name} says meow!`
        }
    }
}
class Dog{
    constructor(name,sex){
        this.name = name;
        this.sex= sex;
        this.speak = () => {
            return `${name} says woof!`
        }
    }
}
class Bird{
    constructor(name,sex){
        this.name = name;
        this.sex= sex;
        this.speak = () => {
            return ( sex === 'male')? `It's me! ${this.name}, the parrot!`: `${this.name} says squawk!`
        }
    }

}