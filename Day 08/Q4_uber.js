// Q4.write a class to calculate uber price.

class Uber {
    constructor(
        initilprice, costperminute, costperkm,
        bookingfee, ridetime, ridedistance){
            this.initilprice = initilprice
            this.costperminute = costperminute
            this.costperkm = costperkm
            this.bookingfee = bookingfee
            this.ridedistance = ridedistance // in kilometers
            this.ridetime = ridetime // in minutes
    }

    getUberprice(){
        let price = this.initilprice + this.costperminute * this.ridetime +
        this.costperkm * this.ridedistance + this.bookingfee;

        console.log(`The uber price is INR:${price}`);
    }
  }
  
  var uprice = new Uber(10, 0.5, 5, 25, 40, 5)
  
  uprice.getUberprice();


/*---------------OUTPUT----------

    The uber price is INR:80

*/