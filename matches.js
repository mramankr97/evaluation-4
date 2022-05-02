var matchData=JSON.parse(localStorage.getItem("schedule"))||[];

displaydata(matchData);

function displaydata(matchData)
{
    matchData.forEach(function(el)
    {
        var tr= document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=el.matchNum;

        var td2=document.createElement("td");
        td2.innerText=el.teamA;

        var td3=document.createElement("td");
        td3.innerText=el.teamB;

        var td4=document.createElement("td");
        td4.innerText=el.date;

        var td5=document.createElement("td");
        td5.innerText=el.venue;

        var td6=document.createElement("td");
        td6.innerText="Favourite";
        td6.style.color="red";
        td6.style.cursor="pointer"
        td6.addEventListener("click",function(){
            favourite(el);
        })
        
        tr.append(td1,td2,td3,td4,td5,td6);
        console.log(tr)
        document.querySelector("tbody").append(tr);
    });
    
var match=JSON.parse(localStorage.getItem("favourites"))||[];

function favourite(el)
{
    match.push(el);
    localStorage.setItem("favourite",JSON.stringify(match));
}

}
