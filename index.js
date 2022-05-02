
var matcharr=JSON.parse(localStorage.getItem("schedule")) ||[];
var form=document.querySelector("form").addEventListener("submit",matchSubmit)

function matchSubmit() 
{
       event.preventDefault();

    var matchObj={
        matchNum:document.querySelector("#matchNum").value,
        teamA:document.querySelector("#teamA").value,
        teamB:document.querySelector("#teamB").value,
        date:document.querySelector("#date").value,
        venue:document.querySelector("#venue").value,
    };

    matcharr.push(matchObj);
    console.log(matcharr)

    localStorage.setItem("schedule",JSON.stringify(matcharr));

    window.location.href="matches.html";
}