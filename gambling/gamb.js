const captcha = document.querySelector(".captcha"),
reloadBtn = document.querySelector(".reload-btn"),
inputField = document.querySelector(".input-area input"),
checkBtn = document.querySelector(".check-btn"),
statusTxt = document.querySelector(".status-text");
//storing all captcha characters in array

var aud = document.getElementById("audio_gambling");
var tudo = document.getElementById("tudo");
var casino = document.getElementById("casino");
var corpo = document.getElementById("corpo");
var audio_roleta = document.getElementById("audio_roleta");
var img_roleta = document.getElementById("img_roleta");
var img_dados2 = document.getElementById("img_dados2");

let allCharacters = ['RICADINHO','GAMBLING','PlAy','GamBLE','GAMbliNg','bET','BET MOR3','aLL In','W1N','doNT ST0p','cASH!','AgAIN','mOre'];
let negacao = ["Nop","Nao","N","Not","Nein","🚫","❌","...","No","???"]
function getCaptcha(){
    captcha.innerText = allCharacters[Math.floor(Math.random() * allCharacters.length)];
}
getCaptcha(); //calling getCaptcha when the page open
//calling getCaptcha & removeContent on the reload btn click
reloadBtn.addEventListener("click", ()=>{
  removeContent();
  getCaptcha();
});
checkBtn.addEventListener("click", e =>{
  e.preventDefault(); //preventing button from it's default behaviour
  statusTxt.style.display = "block";
  //adding space after each character of user entered values because I've added spaces while generating captcha
  
  if(inputField.value == captcha.innerText){ //if captcha matched
    statusTxt.style.color = "#871935";
    statusTxt.innerText = "GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE";
    setTimeout(()=>{
        tudo.style.display = "none";
        corpo.style.backgroundImage = "url('img15.png')";
        img_roleta.style = "position: fixed;top: 34%;display: inline-block;";
        img_dados2.style = "position: absolute;right: 0px;display: inline-block;"
        casino.style = "border: 3px solid rgba(135,25,53,255); border-radius: 25px; background-color: rgba(0, 0, 0, 0.801); color: white; display: flex; justify-content: center; align-items: center; width: 50%; justify-self: center; padding: 10px; flex-direction: column; position: relative;";
        aud.play()
    }, 500)
  }else{
    statusTxt.style.color = "#871935";
    statusTxt.innerText = negacao[Math.floor(Math.random() * negacao.length)];
    setTimeout(()=>{ //calling removeContent & getCaptcha after 2 seconds
        removeContent();
        getCaptcha();
    }, 1000);
  }
});
function removeContent(){
 inputField.value = "";
 captcha.innerText = "";
 statusTxt.style.display = "none";
}