function convert(){
    event.preventDefault();
    var value1 = document.getElementById('value1').value;
    var value2 = document.getElementById('value2').value;
    var value3 = document.getElementById('value1value').value;
    
    // console.log(value1, value2, value3);
    if(value1 == "Celsius"){
        switch(value2){
            case "Celsius":
            document.getElementById('answer').innerText = value3;
            document.getElementById('unit').innerText = '°C';
            break;
            case "Fahrenheit":
            document.getElementById('answer').innerText = ((1.8*value3)+32);
            document.getElementById('unit').innerText = '°F';
            break;
            case "Kelvin":
            document.getElementById('answer').innerText = (+value3 + 273.15);
            document.getElementById('unit').innerText = 'K';
            break;
            default:
                console.log("Wrong Choice");
        }
    }else if(value1 == "Fahrenheit"){
        switch(value2){
            case "Celsius":
            document.getElementById('answer').innerText = ((value3 - 32)*(5/9));
            document.getElementById('unit').innerText = '°C';
            break;
            case "Fahrenheit":
            document.getElementById('answer').innerText = value3;
            document.getElementById('unit').innerText = '°F';
            break;
            case "Kelvin":
            document.getElementById('answer').innerText = (((value3 - 32)*(5/9)) + 273.15);
            document.getElementById('unit').innerText = 'K';
            break;
            default:
                console.log("Wrong Choice");
        }
    }
    else if(value1 == "Kelvin"){
        switch(value2){
            case "Celsius":
            document.getElementById('answer').innerText = (value3  - 273.15);
            document.getElementById('unit').innerText = '°C';
            break;
            case "Fahrenheit":
            document.getElementById('answer').innerText = ( ((value3 - 273.15) * 1.8) + 32 );
            document.getElementById('unit').innerText = '°F';
            break;
            case "Kelvin":
            document.getElementById('answer').innerText = value3;
            document.getElementById('unit').innerText = 'K'
            break;
            default:
                console.log("Wrong Choice");
        }
    }
}
