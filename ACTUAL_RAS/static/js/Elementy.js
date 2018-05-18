var ON_OFFid = 0;var ETYKIETAid = 0;var ZBIORNIKid =0;var LINIAid =0;var KOLOid=0;var SEVENDIGid=0;var BUTTONid=0;
var OBJECTS={};
var lastobjects='';
function ON_OFFADD(){
  $("#Wizualizacja-generator").append(
                                      "<div id='ON_OFF_" + ON_OFFid.toString() + "' style= 'position: absolute; transform: scale(1.0);'> "+
                                      "<button type='button' class='btn btn-xs btn-danger pull-righ delete-wiget' style='float:right;'></button>"+

                                        "<img class='Image alowresize' src='resources/Graphics/ON_OFF.png' width='50' height='50'>"+

                                      "</div> " );
  $( "#ON_OFF_"+ ON_OFFid.toString()).draggable({ grid: [ 20, 20 ] , revert: "invalid"  });
  $(".alowresize").resizable({ aspectRatio: true });
  OBJECTS["ON_OFF_"+ ON_OFFid]={"Typ":"Image","Funkcje":["SRC","HEEH"]};
  ON_OFFid=   ON_OFFid + 1;

};
function ETYKIETA_ADD(){
  $("#Wizualizacja-generator").append(
                                      "<div   id='ETYKIETA_" + ETYKIETAid.toString() + "' style=' position: absolute;  transform: scale(1.0);'> "+
                                        "<button type='button' class='btn btn-xs btn-danger pull-righ delete-wiget' style='float:right;'></button>"+
                                        "<text class='show-opt' id='ETYKIETA_ADD_OPT' >ETKIETA_" +      ETYKIETAid.toString()   +"</text>"+
                                      "</div> " );
  $( "#ETYKIETA_"+ ETYKIETAid.toString()).draggable({ grid: [ 10, 10 ], revert: "invalid" });
  OBJECTS["ETYKIETA_"+ETYKIETAid]={"Typ":"Etykieta","Funkcje":{"TEKST":"ETYKIETA_TEXT","KOLOR":2}};
  ETYKIETAid =   ETYKIETAid  + 1;
  //localStorage.setItem("ETYKIETA_"+ETYKIETAid, {"Typ":"Etykieta","Funkcje":{"TEKST":"ETYKIETA_TEXT","KOLOR":2}});

}
function ETYKIETA_ADD_OPT(a){
  $("#Kontrolka-OpcjeADD").empty();
  $("#Kontrolka-OpcjeADD").append(
    "<h4>" + a +"</h4>"+
      "<label for='A'>Kolor:</label> "+
      "<div id='A' class='input-group colorpicker-component' title='Using format option'>"+

        "<input type='text' class='form-control input-sm' value='#305AA2'/>"+
        "<span class='input-group-addon'><i></i></span>"+
      "</div>"+
      "<div>"+
        "<label for='B'>Tekst:</label> "+
        "<input type='text' id='B' class='form-control' value='" + $("#"+a+" > text").text() +"' >"+
      "</div>"+
      "<div>"+
       "<label for='C'>Wielkość:</label> "+
       "<input type='text' id='C' class='form-control' value='" + $("#"+a+" > text").css("fontSize") +"' >"+
      "</div>"+
      "<div>"+
       "<label >Zmienna:</label> "+
       "<div  class='dropdown'>"+
            "<button class='btn btn-default dropdown-toggle' type='button' data-toggle='dropdown'>Wybierz" +
            "<span class='caret'></span></button>"+
            "<ul id='D' class='dropdown-menu'>"+
              "<li><a href='#'>HTML</a></li>"+
              "<li><a href='#'>CSS</a></li>"+
              "<li><a href='#'>JavaScript</a></li>"+   //JAK BEDZIE JSON TO ZEBY BYŁY Z JSONA

            "</ul>"+
        "</div>"+
      "</div>"
  );
      $("#A")
          .colorpicker({
            format: "rgba"
          })
          .on('colorpickerChange colorpickerCreate', function (e) {
            $("#"+ a ).css('color', e.color.toRgbString());
      });
      $("#B").blur(function(){
        $("#"+a+" > text").html($("#B").val());
        $("#B").text( $("#"+a+" > text").text());
      });
      $("#C").blur(function(){
        $("#"+a+" > text").css("font-size", ($("#C").val()).toString() );
        $("#C").text(  $("#"+a+" > text").css("fontSize")+"px");
      });
      $("#D  li  a").click(function(){
          localStorage.setItem(a,$(this).text())

      });


}
function ZBIORNIK_ADD(){



  $("#Wizualizacja-generator").append(
                                      "<div id='ZBIORNIK_" + ZBIORNIKid.toString() + "' style='height: 172px;width: 130px; position: absolute; transform: scale(1.0);'> "+
                                        "<button type='button' class='btn btn-xs pull-righ' style='position: relative; left: 40px; '>+/-</button>"+
                                        "<button type='button' class='btn btn-xs btn-info pull-righ' data-toggle='modal' data-target='#myModal' style='position: relative; left: 43px; '>"+  ZBIORNIKid +"</button>"+
                                        "<button type='button' class='btn btn-xs btn-danger pull-righ delete-wiget' style='position: relative; left: 46px;'>x</button>"+
                                        "<img  class='Image' src='resources/Graphics/001.png' width='130' height='150' style='position: relative; z-index: 1;'> "+
                                          "<div id= class='progress'  style='height: 35px; width: 110px; transform: rotate(-90deg); position: relative; top:-77px; left: -5px;'>"+
                                              "<div  class='progress-bar progress-bar-success' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style='width:"+ b +"%'>"+
                                              "</div> "+
                                          "</div>"+
                                        "</img>"+
                                      "</div> ");

  $("#ZBIORNIK_"+ ZBIORNIKid.toString()).draggable({ grid: [ 10, 10 ] , revert: "invalid"  });
  $("#ZBIORNIK_0 img div div").css({width:"90%"})
  OBJECTS["ZBIORNIK_"+ZBIORNIKid]={"Typ":"ZBIORNIK","Funkcje":["WYPEŁNINIE","KOLOR"]};
  ZBIORNIKid =   ZBIORNIKid + 1;


}
function LINIA_ADD(){
  $("#Wizualizacja-generator").append(
                                      "<div id='LINIA_" + LINIAid.toString() + "'  style=' position: absolute;  transform: scale(1.0); transform: rotate(0deg);'> "+
                                        "<button type='button' class='btn btn-xs btn-danger pull-righ delete-wiget' style='float:right;'></button>"+
                                          "<div id='LINIA_ADD_OPT' class='show-opt progress alowresize'  style=' width: 100px;' >"+
                                              "<div class='progress-bar progress-bar-info' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style='width:100%; '>"+
                                              "</div> "+
                                          "</div> "+
                                      "</div> " );
  $("#LINIA_"+ LINIAid.toString()).draggable({ grid: [ 10, 10 ] , revert: "invalid"  });
  $(".alowresize").resizable({  grid: 10 });
  LINIAid = LINIAid + 1;
  OBJECTS["LINIAid_"+LINIAid]={"Typ":"LINIA","Funkcje":["DLUGOSC","KOLOR","SZEROKOSC"]};
}
function LINIA_ADD_OPT(a){
    $("#Kontrolka-OpcjeADD").empty();
    $("#Kontrolka-OpcjeADD").append(
      "<h4>" + a +"</h4>"+
      "<label for='A'>Kolor:</label> "+
        "<div id='A' class='input-group colorpicker-component' title='Using format option'>"+
          "<input type='text' class='form-control input-sm' value='#305AA2'/>"+
          "<span class='input-group-addon'><i></i></span>"+
        "</div>"
        );
    $("#A")
            .colorpicker({
              format: "rgba"
            })
            .on('colorpickerChange colorpickerCreate', function (e) {
              $("#" + a + " > div > div").css("background-color", e.color.toRgbString());
    });
}
function CIRCLE_ADD(){

  $("#Wizualizacja-generator").append(
                                      "<div id='KOLO_"+ KOLOid.toString() +"' class='circle' style='position: absolute;'></div>");
  $("#KOLO_"+ KOLOid.toString()).draggable({ grid: [ 10, 10 ] , revert: "invalid"  });
  $("#KOLO_"+ KOLOid.toString()).resizable({ aspectRatio: true });
  KOLOid = KOLOid + 1;
}
function SEVENDIG_ADD(){
  $("#Wizualizacja-generator").append(
  "<div id='SEVENDIG_" + SEVENDIGid.toString() + "'  style='position: absolute;  transform: scale(1.0);'> "+
        "<button type='button' class='btn btn-xs btn-danger  delete-wiget' style='position:absolute;float: left; top: -10px;' ></button>"+
        "<div id='SEVENDIGSET_"+ SEVENDIGid.toString() +"' style='width:350px'></div>"+
    "</div>");
   $("#SEVENDIGSET_"+SEVENDIGid.toString()).sevenSeg({ digits: 5 ,value:12345});
   $("#SEVENDIGSET_"+SEVENDIGid.toString()).resizable({ aspectRatio: true });
   $("#SEVENDIG_" + SEVENDIGid.toString()).draggable({ grid: [ 10, 10 ] , revert: "invalid"  });
   OBJECTS["SEVENDIG_"+SEVENDIGid]={"Typ":"SevenDig","Funkcje":{"WARTOŚĆ":"SEVENDIG_VAR"}};
   SEVENDIGid=SEVENDIGid+1;
}
function BUTTON_ADD(){
  $("#Wizualizacja-generator").append(

        //"<button  type='button' class='alowresize btn3d btn btn-default btn-lg'>Przycisk</button>"+
        "<input id='BUTTON_"+ BUTTONid.toString() + "' type='button' class=' allowresize btn3d btn btn-default btn-lg' value=ABABA />"
      );


  $("#BUTTON_"+ BUTTONid.toString()).draggable({
            cancel: false
        });
  $(".alowresize" ).resizable();
   BUTTONid= BUTTONid+1;

 }

$(document).ready(function(){
      $("#Wizualizacja-generator").droppable();
      $(document).on('click', '.delete-wiget', function () {
        $(this).parent().remove();
        a=$(this).parent().attr("id");
        delete OBJECTS[a];
        //localStorage.removeItem(a);
      });
      $(document).on('click', '.add-widget', function () {

              window[ $(this).attr("id")]();
      });
      $(document).on('dblclick', '.show-opt', function () {
        let a =$(this).attr("id");
        let b =$(this).parent().attr("id");
        //console.log(b+"    "+lastobjects);
      //  $("#"+b).css('border', 'dotted'); //remeber last and clean
        //$("#"+lastobjects).css('border', 'none');
      //  lastobjects=b;

        window[a](b);
      });
    window.prettyPrint && prettyPrint();
});
