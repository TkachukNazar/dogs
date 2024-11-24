//constructor

function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  let age = 0;

  this.setAge = function (a) {
    if (a > 0) {
      age = a;
    } else {
      alert("Цей собака, очевидно, ще не з'явився на світ...");
    }
  };

  this.getAge = function () {
    return age;
  };
  this.bark = function () {
    if (this.weight < 25) {
      alert(this.name + " сказав Тяф!");
    } else {
      alert(this.name + " сказав Гав!");
    }
  };
}

let fido = new Dog("Fido", "Mixed", 38);
let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);

let max = new Dog();
max.name = "Max";
max.weight = 15;

fido.setAge(10);

let dogs = [fido, fluffy, spot, max];
for (let i = 0; i < dogs.length; i++) {
  if (dogs[i] instanceof Dog) {
    dogs[i].bark();
  }
}
