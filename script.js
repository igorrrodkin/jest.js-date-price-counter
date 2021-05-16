 function worktime(symbols,lang,format,year,month,day,hour) {
    let minutes;
    let price;
    if (lang == 'rus'){
      minutes = 30 + symbols*60/1333;
      price = 0.05*symbols;
      if (format != 'rtf' && format != 'doc' && format !='docx'){
        minutes = minutes*1.2;
        price = price*1.2;
      }
      if(price<50){
        price = 50;
      }
    }
    if (lang == 'eng'){
      minutes = 30+ symbols*60/333;
      price = 0.12*symbols;
      if (format != 'rtf' && format != 'doc' && format !='docx'){
        minutes = minutes*1.2;
        price = price*1.2;
      }
      if(price<120){
        price = 120;
      }
    }
    if (minutes <=60){
      minutes = 60;
    }
    let date = new Date(year,month,day,hour,0,0,0);
    if (date.getHours() >= 19) { 
      date.setHours(11,0,0,0)
      date.setDate(date.getDate()+1);
    }
    if (date.getHours() <11) {
      date.setHours(10,0,0,0); 
    } 
    if (date.getDay() == 6 ){
      date.setDate(date.getDate()+2);
      date.setHours(10,0,0,0);
    }
    if (date.getDay() == 0 ){
      date.setDate(date.getDate()+1);
      date.setHours(10,0,0,0); 
    }
    while (minutes>=540){
      date.setDate(date.getDate()+1)
      if (date.getDay() == 6 ){
      date.setDate(date.getDate()+2);
      }
      minutes -=540;
    }
    date.setMinutes(date.getMinutes()+minutes%540);
    if (date.getHours() >= 19 || date.getHours()<10) { 
      date.setHours(date.getHours()+15)
    }
    if (date.getDay() == 6 ){
      date.setHours(date.getHours()+48);
    }
    return (`The price is ${price} hrn , ${date}`);
  }

module.exports = worktime;