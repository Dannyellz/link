let user = {
  name: 'Daniel',
  email: 'guzeev1216@mail.com',
  car: 'Audi'
}

// user.getName = function getName() {
//   return this.name
// }

// console.log(user.getName())
// console.log(user)

const getName = function getName() {
  return this.name;
};

console.log(getName.call(user))

const make = (numer, decim) => ({numer, decim,
  getNumer() {
    return this.numer
  },
  // getDecim() {
  //   return this.decim
  // },
  // toString() {
  //   return this.getNumer() + '/' + this.getDecim()
  // },
  // add(rat) {
  //   let up = this.numer * rat.decim + this.decim * rat.numer
  //   let down = rat.decim * this.decim
  //   return make(up, down)
  // }
})

// console.log(make(3, 4))

// const rat1 = make(3, 4)

// rat1.getNumer = function() {
//   return this.numer
// }
const rat1 = make(3, 4)
const rat2 = make(4, 5)

const getDecim = function getDecim() {
  return this.decim
}


console.log(getDecim.call(rat1))
// const rat3 = rat1.add(rat2) 
// console.log(rat3.toString())

const printer = {
  name: 'Hexlet',
  print() {
    console.log('hello ' + this.name)
  }
}

user.greet = function() {
  console.log('Hello, ' + this.name)
}

console.log(user.greet())