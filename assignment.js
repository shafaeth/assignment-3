// https://github.com/shafaeth/assignment-3

//kilometerToMeter

function kilometerToMeter(kilo){
    var result = kilo * 1000;
    return result;
}
var finalResult = kilometerToMeter(10);
console.log(finalResult);

//budgetCalculator

function budgetCalculator(watch, phone, laptop){

}

//hotelCost

function hotelCost(night){
    var hotel = 0;
if(night <= 10){
    hotel = night * 100;
}
else if(night <= 20){
    var firstTen = 10 * 100;
    var remaining = night - 10;
    var nextTen = remaining * 80;
    hotel = firstTen + nextTen;
}
else{
    var firstTen = 10 * 100;
    var nextTen = 10 * 80;
    var remaining = night - 20;
    var afterTwenty = remaining * 50;
    hotel = firstTen + nextTen + afterTwenty;
}
    return hotel;
}
var count = hotelCost(25);
console.log(count);


//megaFriends


function megaFriends (name){
    var large = name[0];
    for(var i = 0; i < name.length; i++){
        var element = name[i];
        if(element > large){
            large = element;
        }
    }
    return large;
}
var name = ['Helal', 'Nazmul', 'Tanvir', 'Tarikul'];
var result = megaFriends(name);
console.log(result);