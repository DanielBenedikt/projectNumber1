//(()=>{
"use strict"
let missions = []

show()

    function saveNote() {
        let detalisMission = document.getElementById("detalisMission").value
        let dateMission = document.getElementById("dateMission").value
        let timeMission = document.getElementById("timeMission").value

        if(!detalisMission) { 
            alert("the details are missing!!");
            return;
        }
        if(!dateMission) {
            alert("the date is missing!!");
            return;
        }
        if(!timeMission) {
            alert("the time is missing!!");
            return;
        }
       
        let newMission = {
            detalisMission: detalisMission,
            dateMission: dateMission,
            timeMission: timeMission,
        }

        missions.unshift(newMission)

        let json= JSON.stringify(missions)
        localStorage.setItem("missions", json)
        show()

        document.getElementById("detalisMission").value = ""
        document.getElementById("dateMission").value = ""
        document.getElementById("timeMission").value = ""
    }

    function show() {

        if(localStorage.missions){
            missions=JSON.parse(localStorage.missions)

            let noteMission = document.getElementById("noteMission")
            let html = ""
            for (let i in missions) {
                html += `<div class= "note">
                         <button id=${i} onclick=deleteMe(id) class="deleteButton"> X </button><br>
                         <p>${missions[i].detalisMission}</p><br>
                         <p>${missions[i].dateMission}</p>
                         <p>${missions[i].timeMission}</p>
                         </div>
                        `
        }
                noteMission.innerHTML= html
      }
    }

    function deleteMe(id) {
        missions.splice(id,1);
        let json= JSON.stringify(missions);
        localStorage.setItem("missions", json);
        show()
    }

    function reset(){
        document.getElementById("detalisMission").value = ""
        document.getElementById("dateMission").value = ""
        document.getElementById("timeMission").value = ""
    }

//})()