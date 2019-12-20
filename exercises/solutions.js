function makeAccount(balance){
  let obj = {};
    obj.balance = balance;
    obj.checkBalance = function(){return (obj.balance)};
    obj.add = function(num){ 
      obj.balance += num;
      return `${num} added`;
    };
    obj.subtract= function(num){
        obj.balance -= num;
        return `${num} subtracted`;
    };
    return obj;
}
function SavingsAccount(name){
  this.name = name;
  this.balance = 0;
  this.showBalance = function(){ 
    return `$${this.balance}`;
  };
  this.depositFunds = function(num){
    if(num < 0 ){
       return 'Please include a deposit amount that is greater than 0';
    }
    this.balance += num;
    return `$${num} Deposited`;
  };
  this.withdrawFunds = function(num){
    if(this.balance - num < 0 ){
       return 'Insufficient Funds';
    }
    this.balance -= num;
    return `$${num} withdrawn`;
  };
}
function Phone (phoneNum){
  this.contacts = [];
  this.addContact = function(contact){
    if(!contact.hasOwnProperty('name') || !contact.hasOwnProperty('phoneNumber')){
      return 'Invalid';
    }else if (contact.phoneNumber.length < 10){
      return 'Invalid';
    }
    this.contacts.push(contact);
    return `${contact.name} added.`;
  };
  this.removeContact = function(name){
    let foundContact = this.contacts.find((contact) => contact.name === name);
      if (foundContact){
        let indexofCon = this.contacts.indexOf(foundContact);
        this.contacts.splice(indexofCon, 1);
        return `${name} removed.`;
      }
      return 'Contact not found.';
    };
    this.call = function(search){
      let foundContact = this.contacts.find((contact)=> contact.name === search || contact.phoneNumber === search);
      if (foundContact){
        let indexofCon = this.contacts.indexOf(foundContact);
        let name = this.contacts[indexofCon].name;
        return `Calling ${name}...`;
      }else if(!foundContact){
        if(search.match(/\d/g) && (search.length === 10)){
          return `Calling ${search}`;
        }else if(search.match(/\d/g) && search.length < 10){
          return `Invalid`;
        }
        return 'Contact not found.';
      }
    };
}

function AppleiPhone(phoneNumber,model){
    Phone.call(this,phoneNumber);
    this.sendiMessage = function(phone,text){
      if(phone instanceof AppleiPhone){
        return `"Message sent."`;
      }
      return `"Message could not be sent."`;
    };
    AppleiPhone.prototype = Object.create(Phone.prototype);
    AppleiPhone.prototype.constructor = AppleiPhone;
}

class Person{
  constructor(firstName,lastName,age,gender){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }
  fullName(){
    return `${this.firstName} ${this.lastName}`;
  }
  eat(){
    return ` Eating the most unhealthy of ramen...`;
  }
  sleep(){
    return `Getting 0.2 hours of sleep...`;
  }
  communiate(){
    `Trying not to fail...`;
  }
}
class Student extends Person{
  constructor(degree){
    super();
    this.degree = degree;
  }
  study(){
    return `Trying to download textbook`;
  }
}
class GraduateStudent extends Student{
  constructor(gradDegree){
    super();
    this.gradDegree = gradDegree;
  }
  research(){
    return `Trying not to reinvent the wheel`;
  }
}
const professionalMixin ={
  invoice(){
        return 'Billing for work done...';
  },
  payTax(){
      return 'Appeasing the mighty government...';
  }
};
class Professor extends Person{
  constructor(){
        super();
        Object.assign(this,professionalMixin);
    }
}
class Doctor extends Person{
  constructor(){
        super();
        Object.assign(this,professionalMixin);
    }
}
module.exports = {
   makeAccount,
   SavingsAccount,
   Phone,
   AppleiPhone,
   Person,
   Student,
   GraduateStudent,
   Professor,
   Doctor
};
