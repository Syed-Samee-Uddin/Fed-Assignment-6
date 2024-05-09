const prompt=require('prompt-sync')();
let day=prompt('enter the day ')
let  res
switch(day){
    case "monday":res='weekday';
        break
        case "monday":res='weekday';
        break
        case "tuesday":res='weekday';
        break
        case "wednesday":res='weekday';
        break
        case "thursday":res='weekday';
        break
        case "friday":res='weekday';
        break
        case "saturday":res='weekend';
        break
        case "sunday":res='weekend';
        break
    default:
        res='invalid'
}
console.log(res)
