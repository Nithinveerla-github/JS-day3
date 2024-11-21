//Question1
class book {
    title;
    author;
    ibsn;
    constructor(title, author, ibsn) {
        this.title = title;
        this.author = author;
        this.ibsn = ibsn;
    }
    checkout(){
        console.log(this.title , "book is checkedout");
    }
    returnBook(){
        console.log(this.title , "book has been returned");
    }
    upadteTitle(newtitle){
        this.title = newtitle;
    }
}
var mybook = new book("biography" , "nithin" , "212345");
mybook.checkout();
mybook.returnBook();
mybook.upadteTitle("bunny");
console.log(mybook);

// Question2
class product{
    name;
    price;
    category;
    constructor(name , price , category){
        this.name = name;
        this.price = price;
        this.category = category;

    }
    applyDiscount(amount){
        console.log("discount amount is" , amount)
    }
    afterDiscount(){
        console.log( "after discount the price is" , this.price - 300 )
    }
}
var Uspolo = new product ("rarerabit" , "1200" , "shirt");
Uspolo.applyDiscount(300);
Uspolo.afterDiscount();
console.log(Uspolo);

// Question3
class BankAccount {
    accountHolderName;
    accountNumber;
    balance;
    constructor(accountHolderName ,  accountNumber,balance ){
        this.accountHolderName = accountHolderName;
        this.accountNumber = accountNumber;
        this.balance = balance;

    }
    depositAmount(amount){
        this.balance =  this.balance + amount;
        console.log(amount , "is added to the" , this.accountNumber);
        console.log("after deposit the total amount is" , this.balance)
    }
    withdrawAmount(amount){
        this.balance = this.balance - amount;
        console.log(amount , "is withdrawn from the " , this.accountNumber);
        console.log("after withdraw the total amount is" , this.balance)
    }
    totalBalance(){
console.log("Total balance is" , this.balance)
    }
}
var account1 = new BankAccount("Nithin" , "SBI********567", "50000");
account1.depositAmount(10000);
account1.withdrawAmount(5000);
account1.totalBalance();
console.log(account1);

//Question4

class vehicle {
    model;
    licenseplate;
    milege;
    constructor(model, licenseplate, milege) {
        this.model = model;
        this.licenseplate = licenseplate;
        this.milege = milege;

    }
    drive(miles) {
        this.milege = this.milege + miles;
        console.log("Final milege is ", this.milege)

    }
    getMileage() {
        console.log(this.milege);
    }
}
var vehicle1 = new vehicle("Zr900", "TS3109", "30");
vehicle1.drive(40);
vehicle1.getMileage();
console.log(vehicle1);



//Question5
class Student{
    name;
    grade;
  
    constructor(name , grade){
      this.name = name;
      this.grade = grade;
    }
  
    currentGrade(newGrade){
        console.log("Nithin grade is" , this.grade)
      
    }
  
    updatedGrade(newgrade){
      console.log("Nithin upgraded grade is" ,  newgrade)
    }
  }
  
  var s1 = new Student("nithin" , "A+");
  s1.currentGrade();
  s1.updatedGrade("A");

console.log(s1);




