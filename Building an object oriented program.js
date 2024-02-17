// Task 1: Code a Person class
class Person {
  constructor(gender, age) {
    this.gender = gender;
    this.age = age;
  }
}

// Task 2: Code a Worker class
class Worker extends Person {
  constructor(workArea, gender, age) {
    super(gender, age);
    this.workArea = workArea;
  }
}

// Task 3: Code an intern object, run methods
function intern() {
  intern = new Worker("Internship", "Male", 25);
  console.log(intern);
}

// Task 4: Code a manager object, methods
function manager() {
  manager = new Worker("Manager", "Female", 41);
  console.log(manager);
}

manager();
intern();
