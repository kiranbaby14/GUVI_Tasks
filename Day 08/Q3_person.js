// Q3.Write a “person” class to hold all the details.

class Person {
    constructor(name, contactnum, age, email, address) {
      this.name = name
      this.contactnum = contactnum
      this.age = age
      this.email = email
      this.address = address
    }
  
    getName() {
      console.log(`Name: ${this.name}`)
    }
    getContactnum() {
      console.log(`Phn: ${this.contactnum}`)
    }
    getAge() {
      console.log(`Age: ${this.age}`)
    }
    getEmail() {
      console.log(`Email: ${this.email}`)
    }
    getAddress() {
      console.log(`Address: ${this.address}`)
    }
  }
  
  var prs = new Person('Kiran', 7510207694, 23, 'kiranbaby256@gmail.com', 'puthussery (H)')
  prs.getName()
  prs.getContactnum()
  prs.getAge()
  prs.getEmail()
  prs.getAddress()


  /*---------------OUTPUT----------
    Name: Kiran
    Phn: 7510207694
    Age: 23
    Email: kiranbaby256@gmail.com
    Address: puthussery (H)

  */