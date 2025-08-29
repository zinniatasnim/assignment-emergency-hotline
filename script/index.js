let count= 0;
function heart(){
    count++;
    document.getElementById("heart-count").innerText = count;
}

let callButtonCount=0;
let coin =100;
document.getElementById("card-history").addEventListener("click", function(callButton){
    let btn = callButton.target;
    while(btn && !btn.classList.contains("call-btn")){
        btn = btn.parentElement;
    }
    if (!btn) return;
    let card = btn.parentElement;
    while(card && ! card.classList.contains("card-1")){
        card= card.parentElement;
    }
    if (coin < 20){
        alert("❌ Insufficient Coin.Need 20 coins.");
        return;

    }
    const name = card.querySelector(".serviceName").innerText;
    const number = card.querySelector(".serviceNumber").innerText;

    alert("📞 Calling" +" "+ name +" "+number+" "+"...");

    callButtonCount++;
    coin = coin - 20;
    document.getElementById("coin").innerText = coin; 
    
    

})





