function countChocolates(moneystr, pricestr) {
  var money = parseInt(moneystr.replace(/[^-?\d]/g, ''));
  var price = parseInt(pricestr.replace(/[^-?\d]/g, ''));
  
  
    
    if (money <= 0 || price <= 0) {
      return "Invalid Input";
    }
  
    let chocolates = 0 ;
    let newchocolates = 0;
    if ( money >= price)
    {
      newchocolates = Math.floor(money / price);
        chocolates  += newchocolates ;
    }
    while(newchocolates >= 3){
        let rewardchocolates1 = Math.floor(newchocolates/3);
        chocolates  += rewardchocolates1 ;
        newchocolates = newchocolates % 3 + rewardchocolates1;
    }
    return chocolates;
  }
  console.log(countChocolates('i got -68 $','2$'));

  
