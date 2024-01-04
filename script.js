const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculate() {
    let today = new Date();
    let inputDate = new Date(document.getElementById("date").value)

    let birthMonth,birthDate,birthYear; 

    let birthDetails = {
        date:inputDate.getDate(),
        month:inputDate.getMonth()+1,
        year:inputDate.getFullYear()
    }

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() +1;
    let currentDate = today.getDate();


    leapChecker(currentYear);

    if(
        birthDetails.year > currentYear ||
        (birthDetails.month > currentMonth && 
        birthDetails.year == currentYear) ||
        (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)
       
    ){
        alert("Not Born yet");
        return;
    }

}

function leapChecker(year){
    if(year % 4  == 0 || (year & 100 == 0 && year % 400 == 0 )){
        month[1] = 29;
    }
    else{
        month[1] = 28;

    }
    console.log(year,month[1]);
}