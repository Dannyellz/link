const user = {
  name: 'Maxim',
  age: 27,
  greet() {
    console.log('Hello ' + this.name)
  }
}


const alesya = {
  name: 'Alesya',
  age: 19,
}

const person = new Object({
  name: 'Danil',
  age: 24,
  greet: hello,
  logInfo(job, phone) {
    console.group(this.name + ' info:')
    console.log('My name is ' + this.name)
    console.log('Age is ' + this.age)
    console.log('Job is ' + job)
    console.groupEnd()
  }
})


// Object.prototype.hello = function() {
//   console.log('Hello Alesya')
// }

const str = new String("I am a string!")

function hello() {
  console.log('Hello', this)
}

const fnAlesyaInfoLog = person.logInfo.bind(alesya)
fnAlesyaInfoLog('Translator')