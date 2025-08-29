let count= 0;
function heart(){
    count++;
    document.getElementById("heart-count").innerText = count;
}

function getElement(id){
    const element = document.getElementById(id);
    return element;
}

let callButtonCount=0;
let coin =100;
document.getElementById("card").addEventListener("click", function(callButton){
    let btn = callButton.target;
    while(btn && !btn.classList.contains("call-btn")){
        btn = btn.parentElement;
    }
    if (!btn) return;
    let card = btn.parentElement;
    while(card && !card.classList.contains("card-1")){
        card= card.parentElement;
    }
    if (coin < 20){
        alert("❌ Insufficient Coin.Need 20 coins.");
        return;

    }
    const title= card.querySelector(".serviceTitle").innerText;
    const name = card.querySelector(".serviceName").innerText;
    const number = card.querySelector(".serviceNumber").innerText;

    alert("📞 Calling" +" "+ name +" "+number+" "+"...");

    let time = new Date();
    let currentTime =time.toLocaleTimeString();

    callButtonCount++;
    const callHistory  =getElement("call-history");
    const newHistory = document.createElement("div");
    newHistory.innerHTML=`
                <div class="mt-5 bg-gray-100 rounded-xl flex justify-between items-center p-4">
                        <div class="">
                           <h2 class="font-semibold text-sm">${title}</h2>
                           <p>${number}</p> 
                        </div>
                        <p class="text-sm">${currentTime}</p>
                </div>`;
    callHistory .append(newHistory);                

    coin = coin - 20;
    document.getElementById("coin").innerText = coin; 
       
})