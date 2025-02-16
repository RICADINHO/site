var times = SunCalc.getTimes(new Date(), 39.8, -8.1);
var tempo = new Date();
var botao1 = document.getElementById("tocar");
var botao2 = document.getElementById("para");
var foto_de_fundo = document.getElementById("foto_fundo");

var amanha = new Date();
amanha.setDate(tempo.getDate() +1);
console.log(amanha);
var times2 = SunCalc.getTimes(amanha, 39.8,-8.1);
console.log(times2);

console.log(times);// nautical dawn | dawn | sunrise | 1metade | 2metade | solarNoon | 1metade_2 | 2metade_2 | sunset | dusk | nautical dusk | night | metade da noite | night end | nautical dawn (repete)

//cortes de tempo entre sunrire e meio dia
var metade_entre_sunrise_solarNoon = (times.sunrise.getTime() + times.solarNoon.getTime())/2;// 1meio
var primeira_metade_antes_meioDia = (metade_entre_sunrise_solarNoon + times.sunrise.getTime())/2;// 1metade 
var segunda_metade_antes_meioDia = (metade_entre_sunrise_solarNoon + times.solarNoon.getTime())/2;// 2metade
//cortes de tempo entre meio dia e sunset
var METADE_entre_solarNoon_sunset = (times.solarNoon.getTime() + times.sunset.getTime())/2;// 2meio
var PRIMEIRA_metade = (METADE_entre_solarNoon_sunset + times.solarNoon.getTime())/2;// 1metade_2
var SEGUNDA_metade = (METADE_entre_solarNoon_sunset + times.sunset.getTime())/2;// 2metade_2
//cortes de tempo das noites
var NOITE_metade = (times.night.getTime() + times.nightEnd.getTime())/2;
var teste_metade = (times.night.getTime() + times2.nightEnd.getTime())/2;
//console.log(times.sunrise.getTime())
//console.log(times.solarNoon.getTime())
/*console.log((times.sunrise.getTime() + times.solarNoon.getTime())/2)
console.log((metade_entre_sunrise_solarNoon + times.sunrise.getTime())/2)
console.log((metade_entre_sunrise_solarNoon + times.solarNoon.getTime())/2)*/
/*var sunriseStr = times.sunrise.getHours() + ':' + times.sunrise.getMinutes();
var sunrisePos = SunCalc.getPosition(times.sunrise, 51.5, -0.1);
var sunriseAzimuth = sunrisePos.azimuth * 180 / Math.PI*/
/*console.log(times);
console.log(times.dawn);
console.log(new Date());
var ola = new Date();
console.log(times.dawn.getMonth() === ola.getMonth());
console.log(ola.getTime());*/
console.log("-----------TEMPOS--------------");
console.log("tempo: "+tempo.getTime());
console.log("nauticalDawn: "+times.nauticalDawn.getTime());
console.log("dawn: "+times.dawn.getTime());
console.log("sunrise: "+times.sunrise.getTime());
console.log("primera metade antes meio dia: "+primeira_metade_antes_meioDia);
console.log("segunda metade antes meio dia: "+segunda_metade_antes_meioDia);
console.log("solarNoon: "+times.solarNoon.getTime());
console.log("primeira metade depois meio dia: "+PRIMEIRA_metade);
console.log("segunda metade depois meio dia: "+SEGUNDA_metade);
console.log("sunset: "+times.sunset.getTime());
console.log("dusk: "+times.dusk.getTime());
console.log("nauticalDusk: "+times.nauticalDusk.getTime());
console.log("night: "+times.night.getTime());
console.log("noite metade: "+ teste_metade);
console.log("nightEnd: "+times2.nightEnd.getTime());
console.log("---------ACABOU TEMPOS---------");

if(times.nauticalDawn.getTime() <= tempo.getTime() && tempo.getTime() < times.dawn.getTime()){//NAUTICAL DAWN
  foto_de_fundo.style = "background-image: url('cenas_do_site/8bit_day/14-sem_sol_(nautical_dawn).png'); background-repeat: no-repeat;background-attachment: fixed; background-size: 100% 100%;";
  botao1.style = "background-color: rgba(125,16,157,255);border-color: rgba(125,16,157,255);color: rgba(255, 255, 255, 0.8);";
  botao2.style = "background-color: rgba(125,16,157,255);border-color: rgba(125,16,157,255);color: rgba(255, 255, 255, 0.8);display: none";
}else if(times.dawn.getTime() <= tempo.getTime() && tempo.getTime() < times.sunrise.getTime()){//DAWN
  foto_de_fundo.style = "background-image: url('cenas_do_site/8bit_day/1-sol_a_nascer_bem_pequeno_(dawn).png'); background-repeat: no-repeat;background-attachment: fixed; background-size: 100% 100%;";
  botao1.style = "background-color: rgba(24,35,127);border-color: rgba(24,35,127);color: rgba(255, 255, 255);";
  botao2.style = "background-color: rgba(24,35,127);border-color: rgba(24,35,127);color: rgba(255, 255, 255);display: none";
}else if(times.sunrise.getTime() <= tempo.getTime() && tempo.getTime() < primeira_metade_antes_meioDia){//SUNRISE
  foto_de_fundo.style = "background-image: url('cenas_do_site/8bit_day/2-sol_a_nascer_(sunrise).png'); background-repeat: no-repeat;background-attachment: fixed; background-size: 100% 100%;";
  botao1.style = "background-color: rgba(31,45,229);border-color: rgba(31,45,229);color: darkblue;"
  botao2.style = "background-color: rgba(31,45,229);border-color: rgba(31,45,229);color: darkblue;display: none"
}else if(primeira_metade_antes_meioDia <= tempo.getTime() && tempo.getTime() < segunda_metade_antes_meioDia){//PRIMERA METADE ENTRE SUNRISE E MEIO DIA
  foto_de_fundo.style = "background-image: url('cenas_do_site/8bit_day/3-sol_depois_de_nascer_(primeira_metade_entre_2_e_5).png'); background-repeat: no-repeat;background-attachment: fixed; background-size: 100% 100%;";
  botao1.style = "background-color: rgba(71,185,255);border-color: rgba(71,185,255);";
  botao2.style = "background-color: rgba(71,185,255);border-color: rgba(71,185,255);display: none";
}else if(segunda_metade_antes_meioDia <= tempo.getTime() && tempo.getTime() < times.solarNoon.getTime()){//SEGUNDA METADE ENTRE SUNRISE E MEIO DIA
  foto_de_fundo.style = "background-image: url('cenas_do_site/8bit_day/4-sol_quase_meio_dia_(segunda_metade_entre_2_e_5).png'); background-repeat: no-repeat;background-attachment: fixed; background-size: 100% 100%;";
  botao1.style = "background-color: rgba(102,218,255);border-color: rgba(102,218,255);";
  botao2.style = "background-color: rgba(102,218,255);border-color: rgba(102,218,255);display: none";
}else if(times.solarNoon.getTime() <= tempo.getTime() && tempo.getTime() < PRIMEIRA_metade){//MEIO DIA
  foto_de_fundo.style = "background-image: url('cenas_do_site/8bit_day/5-meio_dia_(solarNoon).png'); background-repeat: no-repeat;background-attachment: fixed; background-size: 100% 100%;";
  botao1.style = "background-color: rgba(115,224,255);border-color: rgba(115,224,255);";
  botao2.style = "background-color: rgba(115,224,255);border-color: rgba(115,224,255);display: none";
}else if(PRIMEIRA_metade <= tempo.getTime() && tempo.getTime() < SEGUNDA_metade){//1 METADE ENTRE MEIO DIA E SUNSET
  foto_de_fundo.style = "background-image: url('cenas_do_site/8bit_day/6-sol_depois_de_meio_dia_(primeira_metade_entre_5_e_8).png'); background-repeat: no-repeat;background-attachment: fixed; background-size: 100% 100%;";
  botao1.style = "background-color: rgba(102,218,255);border-color: rgba(102,218,255);";
  botao2.style = "background-color: rgba(102,218,255);border-color: rgba(102,218,255);display: none";
}else if(SEGUNDA_metade <= tempo.getTime() && tempo.getTime() < times.sunset.getTime()){//2 ETADE ENTRE MEIO DIA E SUNSET
  foto_de_fundo.style = "background-image: url('cenas_do_site/8bit_day/7-sol_perto_de_por_(segunda_metade_entre_5_e_8).png'); background-repeat: no-repeat;background-attachment: fixed; background-size: 100% 100%;";
  botao1.style = "background-color: rgba(73,116,229);border-color: rgba(73,116,229);color: rgb(48, 48, 48);";
  botao2.style = "background-color: rgba(73,116,229);border-color: rgba(73,116,229);color: rgb(48, 48, 48);display: none";
}else if(times.sunset.getTime() <= tempo.getTime() && tempo.getTime() < times.dusk.getTime()){//SUNSET
  foto_de_fundo.style = "background-image: url('cenas_do_site/8bit_day/8-sol_a_por_(sunset).png'); background-repeat: no-repeat;background-attachment: fixed; background-size: 100% 100%;";
  botao1.style = "background-color: rgba(123,19,158);border-color: rgba(123,19,158);color: rgb(215, 215, 215);";
  botao2.style = "background-color: rgba(123,19,158);border-color: rgba(123,19,158);color: rgb(215, 215, 215);display: none";
}else if(times.dusk.getTime() <= tempo.getTime() && tempo.getTime() < times.nauticalDusk.getTime()){//DUSK
  foto_de_fundo.style = "background-image: url('cenas_do_site/8bit_day/9-sol_quase_a_por_(dusk).png'); background-repeat: no-repeat;background-attachment: fixed; background-size: 100% 100%;";
  botao1.style = "background-color: rgba(136,0,158,255);border-color: rgba(136,0,158,255);color: rgb(215, 215, 215);";
  botao2.style = "background-color: rgba(136,0,158,255);border-color: rgba(136,0,158,255);color: rgb(215, 215, 215);display: none";
}else if(times.nauticalDusk.getTime() <= tempo.getTime() && tempo.getTime() < times.night.getTime()){//NAUTICALDUSK
  foto_de_fundo.style = "background-image: url('cenas_do_site/8bit_day/14-sem_sol_(nautical_dawn).png'); background-repeat: no-repeat;background-attachment: fixed; background-size: 100% 100%;";
  botao1.style = "background-color: rgba(125,16,157,255);border-color: rgba(125,16,157,255);color: rgba(255, 255, 255, 0.8);";
  botao2.style = "background-color: rgba(125,16,157,255);border-color: rgba(125,16,157,255);color: rgba(255, 255, 255, 0.8);display: none";
}else if(times.night.getTime() <= tempo.getTime() && tempo.getTime() < teste_metade){//NIGHT
  foto_de_fundo.style = "background-image: url('cenas_do_site/8bit_day/11-inicio_da_noite_(night).png'); background-repeat: no-repeat;background-attachment: fixed; background-size: 100% 100%;";
  botao1.style = "background-color: rgba(26,14,112,255);border-color: rgba(26,14,112,255);color: rgb(233, 233, 233);";
  botao2.style = "background-color: rgba(26,14,112,255);border-color: rgba(26,14,112,255);color: rgb(233, 233, 233);display: none";
}else if(teste_metade <= tempo.getTime() && tempo.getTime() < times2.nightEnd.getTime()){//MEIA NOITE
  foto_de_fundo.style = "background-image: url('cenas_do_site/8bit_day/12-meio_da_noite.png'); background-repeat: no-repeat;background-attachment: fixed; background-size: 100% 100%;";
  botao1.style = "background-color: rgba(30,25,79);border-color: rgba(30,25,79);color: rgba(255, 255, 255);";
  botao2.style = "background-color: rgba(30,25,79);border-color: rgba(30,25,79);color: rgba(255, 255, 255);display: none";
}else if(times2.nightEnd.getTime() <= tempo.getTime()){// && tempo.getTime() < times2.nauticalDawn.getTime()){//NIGHTEND
  foto_de_fundo.style = "background-image: url('cenas_do_site/8bit_day/13-fim_da_noite_(night end).png'); background-repeat: no-repeat;background-attachment: fixed; background-size: 100% 100%;";
  botao1.style = "background-color: rrgba(35,30,98);border-color: rgba(35,30,98);color: rgba(255, 255, 255, 0.8);";
  botao2.style = "background-color: rgba(35,30,98);border-color: rgba(35,30,98);color: rgba(255, 255, 255, 0.8);display: none";
}else{// ERRO
  /*foto_de_fundo.style = "background-image: url('cenas_do_site/pagina_de_erro.png');background-repeat: no-repeat;background-attachment: fixed; background-size: 100% 100%";
  botao1.style = "background-color: black;border-color: black;color: white;";
  botao2.style = "background-color: black;border-color: black;color: white;display: none";*/
  foto_de_fundo.style = "background-image: url('cenas_do_site/8bit_day/12-meio_da_noite.png'); background-repeat: no-repeat;background-attachment: fixed; background-size: 100% 100%;";
  botao1.style = "background-color: rgba(30,25,79);border-color: rgba(30,25,79);color: rgba(255, 255, 255);";
  botao2.style = "background-color: rgba(30,25,79);border-color: rgba(30,25,79);color: rgba(255, 255, 255);display: none";
}