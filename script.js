"use strict";

let Jack = {
  firstname: "Jack",
  lastname: "White",
  weight: 79,
  height: 1.7,
  calculateBMI: function () {
    this.BMI = this.weight / this.height / this.height;
    return this.BMI;
  },
};

let Mike = {
  firstname: "Mike",
  lastname: "Black",
  weight: 91,
  height: 1.93,
  calculateBMI: function () {
    this.BMI = this.weight / this.height / this.height;
    return this.BMI;
  },
};

if (Mike.BMI > Jack.BMI) {
  console.log(
    `${Mike.firstname} ${
      Mike.lastname
    } BMI (${Mike.calculateBMI()}) is higher than ${Jack.firstname} ${
      Jack.lastname
    } BMI (${Jack.calculateBMI()}) `
  );
} else {
  console.log(
    `${Jack.firstname} ${
      Jack.lastname
    } BMI (${Jack.calculateBMI()}) is higher than ${Mike.firstname} ${
      Mike.lastname
    } BMI (${Mike.calculateBMI()}) `
  );
}
