class Person{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    getnameGetter(){
        return [this.firstname] + [this.lastname];

    }
    setnameSetter(val1,val2){
       `${this.firstname=val1} ${this.lastname=val2}`;

    }
}
let object1 =new Person("Michael","Tesfay")
console.log(object1);

object1.setnameSetter("Nico","B.");
console.log(object1.getnameGetter());

