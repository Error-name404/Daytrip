let Destination = ["Milwaulkee", "Chicago", "New York", "Seattle"]
let Restaurant = ["Pizza hut", "Wendys", "Arbys", "Culvers"]
let Transportation = ["bus", "Car", "Plane", "Uber"]
let Entertainment = ["Live music", "Rollercoasters", "Museum Tour", "Sightseeing"]

var Des;
var Res;
var Transport;
var Ent;

Des =(Destination[Math.floor(Math.random()*Destination.length)])
Res =(Restaurant[Math.floor(Math.random()*Restaurant.length)])
Transport =(Transportation[Math.floor(Math.random()*Transportation.length)])
Ent =(Entertainment[Math.floor(Math.random()*Entertainment.length)])

function Trip (){
    let Info = alert(`Your Trip information is 
    Destination:${Des} 
    Restaurant:${Res} 
    Transportation:${Transport} 
    Entertainment:${Ent}`)
    return Info 
}
let tripinfo = Trip()
console.log (tripinfo)


var Change;
var change;

do{
    Change = prompt ("do you want to change any of the selectings enter 1 for yes or 2 for no")
    if (Change == 1){
        alert (`your trip is complete 
        Destination:${Des} 
        Restaurant:${Res} 
        Transportation:${Transport} 
        Entertainment:${Ent}`)
        break
    } else if (Change == 2){
        change = prompt (`which would you like to change 
        1:Destination 
        2:Restaurant 
        3:Transportation 
        4:Entertainment 
        enter the number of the selected`)
        if (change == 1){
            Des =(Destination[Math.floor(Math.random()*Destination.length)])
            Trip()
        } else if (change == 2){
            Res =(Restaurant[Math.floor(Math.random()*Restaurant.length)])
            Trip()
        } else if (change == 3){
            Transport =(Transportation[Math.floor(Math.random()*Transportation.length)])
            Trip()
        } else if (change == 4){
            Ent =(Entertainment[Math.floor(Math.random()*Entertainment.length)])
            Trip()
        } else{
            Trip()
        }
    }
} while (true)