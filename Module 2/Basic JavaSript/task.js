class account
{
    constructor (acnumber,ifsccode,amount)
    {
        this.acnumber=acnumber
        this.ifsccode=ifsccode
        this.amount=amount
    }
}
class atm extends account
{
    constructor(acnumber,ifsccode,amount,pin)
    {
        super(acnumber,ifsccode,amount,pin);
        this.pin=pin;
    }
}

var object=new atm(95462548,"SBIOO456789",5000,2560)
console.log(object);