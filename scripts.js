//collecting or  defining the dynamic clock elements
var d_hour = document.getElementById('d-hour');
var d_minute = document.getElementById('d-minute');
var d_seconds = document.getElementById('d-seconds');
var d_am_pm = document.getElementById('d-am-pm');

//setting the alram event scetion and adding to array
//this holds the Alarm container 
var clockStore = [];
var store = document.querySelectorAll('.clock');
for (const iterator of store) {
    clockStore.push(iterator);
    // console.log(clockStore);
}

var dropdown_zone = document.querySelector('.dropdown-toggle');
let zone = document.querySelectorAll('.dropdown-item');
let zoneItem = "AM";

// setting the alarm 
// var setClock = document.querySelectorAll('#set-clock  button');
let set_hour = document.querySelector('.set-hour');
let set_minute = document.querySelector('.set-minute');
let set_second = document.querySelector('.set-second');
// set_hour.value=00,set_minute.value=00,set_second.value=00;
let countalrm = 0;
for (let zoneTravel = 0; zoneTravel < zone.length; zoneTravel++) {
    zone[zoneTravel].addEventListener('click', function () {
        dropdown_zone.innerHTML = zone[zoneTravel].innerHTML;
        zoneItem = zone[zoneTravel].innerHTML;
    });
}

//when the set Alrm button clicks
function check() {

    //shows alert if entered invalid number
    if (set_hour.value < 0 || set_hour.value > 12 && set_minute.value < 0 || set_minute.value > 59 && set_second.value < 0 || set_second.value > 59) {
        alert("please check time you entered are valid!! 12 hour clock minute and time should be 0 to 59");
        return;
    }
    else if (set_hour.value < 0 || set_hour.value > 12) {
        // if(set_hour==12 && )
        alert("please enter hour between 0 to 12");
        return;
    }
    else if (set_minute.value < 0 || set_minute.value > 59) {
        alert("please enter minutes between 0 to 59");
        return;
    }
    else if (set_second.value < 0 || set_second.value > 59) {
        alert("please enter seconds between 0 to 59");
        return;
    }

    //add the alarm container 
    for (let k = 0; k < store.length; k++) {
        if (k <= countalrm) {
            let shortnum = 0;
            if (store[k].style.width == "0px") {

                // let zoneItem=dropdown_zone.innerHTML;
                

                if (set_hour.value >= 1 && set_hour.value <= 9) {
                    shortnum = parseInt(set_hour.value);
                    store[k].querySelector('.hour').innerHTML = "0" + shortnum;
                    set_hour.value = "0" + shortnum;
                }
                else if (set_hour.value > 9) {
                    
                    store[k].querySelector('.hour').innerHTML = set_hour.value;
                } else {
                    set_hour.value = "00";
                    store[k].querySelector('.hour').innerHTML = "00";
                }

                if (set_minute.value >= 1 && set_minute.value <= 9) {
                    shortnum = parseInt(set_minute.value);
                    set_minute.value="0"+shortnum;
                    store[k].querySelector('.minute').innerHTML = set_minute.value;
                    // set_minute.value = shortnum;
                }
                else if (set_minute.value > 9) {
                    store[k].querySelector('.minute').innerHTML = set_minute.value;

                } else {
                    set_minute.value = "00";
                    store[k].querySelector('.minute').innerHTML = "00";
                }

                if (set_second.value >= 1 && set_second.value <= 9) {
                    shortnum = parseInt(set_second.value);
                    set_second.value = "0" + shortnum;
                    store[k].querySelector('.seconds').innerHTML = set_second.value;
                }
                else if (set_second.value > 9) {
                    store[k].querySelector('.seconds').innerHTML = set_second.value;
                } else {
                    set_second.value = "00";
                    store[k].querySelector('.seconds').innerHTML = "00";
                }

                store[k].querySelector('.Time_zone').innerHTML=zoneItem;
                store[k].style.width = "auto";
                store[k].style.height = "auto";
                store[k].style.padding = "20px";
            store[k].style.borderStyle = "solid";
            store[k].style.margin = "4px";
            store[k].style.borderRadius = "2rem";
                break;
            }
        } else {

            countalrm++;
           

            if (set_hour.value >= 1 && set_hour.value <= 9) {
                shortnum = parseInt(set_hour.value);
                store[k].querySelector('.hour').innerHTML = "0" + shortnum;
                set_hour.value = "0" + shortnum;
            }
            else if (set_hour.value > 9) {
                
                store[k].querySelector('.hour').innerHTML = set_hour.value;
            } else {
                set_hour.value = "00";
                store[k].querySelector('.hour').innerHTML = "00";
            }

            if (set_minute.value >= 1 && set_minute.value <= 9) {
                shortnum = parseInt(set_minute.value);
                set_minute.value = "0" + shortnum;
                store[k].querySelector('.minute').innerHTML = set_minute.value;
            }
            else if (set_minute.value > 9) {
                store[k].querySelector('.minute').innerHTML = set_minute.value;
            } else {
                set_minute.value = "00";
                store[k].querySelector('.minute').innerHTML = "00";
            }

            if (set_second.value >= 1 && set_second.value <= 9) {
                shortnum = parseInt(set_second.value);
                set_second.value = "0" + shortnum;
                store[k].querySelector('.seconds').innerHTML =  set_second.value;
            }
            else if (set_second.value > 9) {
                store[k].querySelector('.seconds').innerHTML = set_second.value;

            } else {
                set_second.value = "00";
                store[k].querySelector('.seconds').innerHTML = "00";
            }

            store[k].querySelector('.Time_zone').innerHTML=zoneItem;
            store[k].style.height = "auto";
            store[k].style.width = "auto";
            store[k].style.padding = "20px";
            store[k].style.borderStyle = "solid";
            store[k].style.margin = "4px";
            store[k].style.borderRadius = "2rem";
            if (countalrm > store.length) {
                countalrm = 0;
            }
            break;
        }
        
    }


};

//This will run every 1second
var Interval = setInterval(function () {
    //creating time object
    var date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let temp;
    temp = hour < 12 ? "AM" : "PM";

    if(hour>12 ){
        hour=hour%12;
    }else if(hour==12 || hour==24){
        hour=12;
    }
    d_hour.innerHTML = hour;
    d_minute.innerHTML = minute;
    d_seconds.innerHTML = second;
    d_am_pm.innerHTML = temp;

    for (let k = 0; k < store.length; k++) {

        if (store[k].querySelector('.hour').innerHTML == hour) {
            // console.log(store[0].querySelector('.hour').innerHTML);
            if (store[k].querySelector('.minute').innerHTML == minute) {
                if (store[k].querySelector('.seconds').innerHTML == second) {
                    if (store[k].querySelector('.Time_zone').innerHTML == temp) {
                        window.alert("time up!!");
                    }
                }
            }
        }
    }

}, 1000);

// initializing height and width of alrm event
function initialize() {

    for (let k = 0; k < clockStore.length; k++) {
        store[k].style.height = "0px";
        store[k].style.width = "0px";
        store[k].style.padding = "0px";
        store[k].style.borderStyle = "none";
        store[k].style.margin = "0px";
        store[k].style.borderRadius = "0px";
    }
}
initialize();

// delete button function
for (let k = 0; k < clockStore.length; k++) {
    let temp = clockStore[k].querySelector('.clock button');
    temp.addEventListener('click', function () {
        //setting size to zero
        store[k].style.height = "0px";
        store[k].style.width = "0px";
        store[k].style.padding = "0px";
        store[k].style.borderStyle = "none";
        store[k].style.margin = "0px";
        store[k].style.borderRadius = "0px";
        // store[k].classList.add('initialize');
    });
}