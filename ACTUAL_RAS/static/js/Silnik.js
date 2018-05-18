var LINKER_ARRAY ;
var RUN=true;
var PROJECT=true;



/////////////////////////////////////////////////////////////////////////////////
////ModulesChangerFunctions//////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
function ETYKIETA_TEXT(a,b){
    $("#"+a+" > text").html(b);
}
function SEVENDIG_VAR(a,b){
  $("#"+a +" > div").first().sevenSeg({digits:5, value: b });
}

///////////////////////////////////////////////////////////////////
//Project_Run/////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

$(document).ready(function(){
    var socket =io.connect("http://192.168.137.100:5000/test");
    socket.on('newnumber',function(msg){
      if(RUN==true){ LINKER_ARRAY=JSON.parse(msg.number); RUN=false; }
    })


  //$("#ZBIORNIK_0 > div > div").css({'width': prc});
//  if (prc>100) {prc=0;}
//  else prc=prc+10;
//  $("#SEVENDIGSET_0").sevenSeg({ value: x });
//  if(iArrayValue > 9.999) iArrayValue =0.777;
//  else iArrayValue = iArrayValue + 0.001;

//console.log(localStorage.getItem("ETYKIETA_0"));
});
