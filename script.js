function setup() {
    var socket = io();
    var side = 30;
    var matrix = [];
    
   

    let weatherElement = document.getElementById('weather');
    let grassCountElement = document.getElementById('grassCount');
    let grassLiveCountElement = document.getElementById('grassLiveCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let grassEaterLiveCountElement = document.getElementById('grassEaterLiveCount');
    let predatorCountElement = document.getElementById('predatorCount');
    let predatorLiveCountElement = document.getElementById('predatorLiveCount');
    let bombaCountElement = document.getElementById('bombaCount');
    let bombaLiveCountElement = document.getElementById('bombaLiveCount');
    let amenakerCountElement = document.getElementById('amenakerCount');
    let amenakerLiveCountElement = document.getElementById('amenakerLiveCount');
    let terminatorCountElement = document.getElementById('terminatorCount');
    let terminatorLiveCountElement = document.getElementById('terminatorLiveCount');
    

    socket.on("data", drawCreatures);
    function drawCreatures(data) {
       


        matrix = data.matrix;
        weatherElement.innerText = data.weather;
        grassCountElement.innerText = data.grassCounter;
        grassLiveCountElement.innerText = data.grassLiveCounter;
        grassEaterCountElement.innerText = data.grassEaterCounter;
        grassEaterLiveCountElement.innerText = data.grassEaterLiveCounter;
        predatorCountElement.innerText = data.predatorCounter;
        predatorLiveCountElement.innerText = data.predatorLiveCounter;
        bombaCountElement.innerText = data.bombaCounter;
        bombaLiveCountElement.innerText = data.bombaLiveCounter;
        amenakerCountElement.innerText = data.amenakerCounter;
        amenakerLiveCountElement.innerText = data.amenakerLiveCounter;
        terminatorCountElement.innerText = data.terminatorCounter;
        terminatorLiveCountElement.innerText = data.terminatorLiveCounter;
       

        
        createCanvas(matrix[0].length * side, matrix.length * side)
        background('#acacac');
 


        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    if(data.weather == "Ամառ"){
                        fill("green");
                    }else if (data.weather == "Աշուն"){
                        fill("orange");
                    }else if (data.weather == "Ձմեռ"){
                        fill("white");
                    }else if (data.weather == "Գարուն"){
                        fill("pink");
                    }
                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                }
                else if (matrix[y][x] == 2) {
                    if(data.weather == "Ամառ"){
                        fill("orange")
                    }
                    else if(data.weather == "Աշուն"){
                        fill("#ffba30")
                    }
                    else if (data.weather == "Ձմեռ"){
                        fill("#ffc859")
                    }
                    else if (data.weather == "Գարուն"){
                        fill("#facf78")
                    }
                }
                else if (matrix[y][x] == 3) {
                    if(data.weather == "Ամառ"){
                        fill("#ff0000")
                    }
                    else if(data.weather == "Աշուն"){
                        fill("#f52727")
                    }
                    else if (data.weather == "Ձմեռ"){
                        fill("##fa4d4d")
                    }
                    else if (data.weather == "Գարուն"){
                        fill("#ff7575")
                    }
                  
                }
                else if (matrix[y][x] == 4) {
                    if(data.weather == "Ամառ"){
                        fill("#000000")
                    }
                    else if(data.weather == "Աշուն"){
                        fill("#0a0202")
                    }
                    else if (data.weather == "Ձմեռ"){
                        fill("#0a0404")
                    }
                    else if (data.weather == "Գարուն"){
                        fill("#120b0b")
                    }
                }
        
                else if (matrix[y][x] == 5) {
                    if(data.weather == "Ամառ"){
                        fill("#0015ff")
                    }
                    else if(data.weather == "Աշուն"){
                        fill("#1e31fc")
                    }
                    else if (data.weather == "Ձմեռ"){
                        fill("#4554f5")
                    }
                    else if (data.weather == "Գարուն"){
                        fill("#7480fc")
                    }
                }

                else if (matrix[y][x] == 6) {
                    if(data.weather == "Ամառ"){
                        fill("#ff00d4")
                    }
                    else if(data.weather == "Աշուն"){
                        fill("#fa16d4")
                    }
                    else if (data.weather == "Ձմեռ"){
                        fill("#f739d8")
                    }
                    else if (data.weather == "Գարուն"){
                        fill("#ff7ae9")
                    }
                  
                }
                rect(x * side, y * side, side, side);
            }
        }
        
    }
}







