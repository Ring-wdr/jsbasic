const Dog = function(name) {
    console.log(//this,
                new.target, 
                this instanceof Dog);
    this.name = name;
    this.bark = function () {
    console.log('bark=', new.target, this.name, name);
    };
    this.bark2 = () =>
    console.log('bark2=', new.target, this.name, name); // dog.new.target
}

const dog = Dog('Doggy');
const lucy = new Dog('Lucy');
// Dog.bark(); // ? error
// bark();
lucy.bark(); // ?
lucy.bark2(); // ?
console.log('type=', typeof dog); // ?
console.log('type=', typeof lucy);

console.log("-=-=-=-==-==-=");

const Cat = (name) => {
    console.log(this, new.target);
    this.name = name;
    this.barkCat = function () {
    console.log('barkCat=', new.target, this.name, name);
    };
    this.barkCat2 = () => {
    console.log('barkCat2=', new.target, this.name, name);
    }
    return this;
}

const cat = Cat('Coco');
// const cat = new Cat(''); // error!!
cat.barkCat(); // ?
cat.barkCat2(); // ? 
// Cat.barkCat(); // ?
// Cat.barkCat2(); // ? 
console.log('type=', typeof cat); // ? 

console.log('-=-==-=-=-=-=--');

const obj = {
    name: 'ObjName',
    bark1() {
      console.log('1=', this.name);
      const self = this;
      setTimeout( function() {
        console.log('11=', self.name);
      }, 1000);
      console.log('xxxx');
    },
    bark2() {
      console.log('2=', this.name);
      setTimeout(() => {
        console.log('22=', this.name);
      }, 1000);
    },
};

obj.bark1();
obj.bark2();


  