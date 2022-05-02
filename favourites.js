var Data=JSON.parse(localStorage.getItem("favourite"))||[];

displaydata(Data);

function displaydata(Data)
{  
    Data.forEach(function(el,index)
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
        td6.innerText="Delete";
        td6.style.color="red";
        td6.style.cursor="pointer"
        td6.addEventListener("click",function(){
            deletematch(el,index);
        });
        
        tr.append(td1,td2,td3,td4,td5,td6);
        console.log(tr)
        document.querySelector("tbody").append(tr);
    });

}
function  deletematch(el,index)
{
  Data.splice(index,1);

  localStorage.setItem("favourite",JSON.stringify(Data));

  window.location.reload();
} 

