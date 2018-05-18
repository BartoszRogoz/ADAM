function SwitchProject_Run(){
    RUN=!RUN;
    if(RUN==true){
      for (x in OBJECTS)    {
          $("#"+x+" > button").hide();
      }
      $("#SEVENDIGSET_0").empty();//////////TU JEST KLUCZ DO SEVENDIGA

    }
    if(RUN==false) {
      for (x in OBJECTS)
      {
        $("#"+x+" > button").show();
      }
      if(typeof RUNID !== 'undefined')  {  clearInterval(RUNID);}
    }
}


$("#myFile").bind("change", function () {                           //ŁADOWANIE WIZUALIZACJI
  //OBJECTS=jQuery.parseJSON(localStorage.getItem("OBIEKTY"));
  if (this.files && this.files[0]) {
    var myFile = this.files[0];
    var reader = new FileReader();
    reader.addEventListener('load', function (e) {
    $("#Wizualizacja-generator").html("");
    $("#Wizualizacja-generator").html( e.target.result);
    });
    reader.readAsBinaryString(myFile);
  }
});


function Save_Project( name, type) {                              //ZAPISYWANIE WIZUALIZACJI
  text1= "<html><head>"+
          "<meta charset='utf-8'>"+
          "<meta http-equiv='X-UA-Compatible' content='IE=edge'> "+
          "<meta name='viewport' content='width=device-width, initial-scale=1'> "+

          "<title>Bartosz Rogoz</title>"+

          "<meta name='description' content='Praca Magisterska - Bartosz Rogoz'> "+
          "<meta name='author' content='Bartosz Rogoz'> "+

          "<link href='static/css/bootstrap.min.css' rel='stylesheet'></link> "+
          "<link href='static/css/style.css' rel='stylesheet'></link> "
          "<link href='static/cssjquery-ui.css' rel='stylesheet'></link> "+
        "  <link href='static/css/bootstrap-colorpicker.min.css' rel='stylesheet'> </link> </head> <body> "; //Moze być z kompilacja
  text2= $("#Wizualizacja-generator").html();
  text3="<script src='https://code.jquery.com/jquery-1.12.4.js'></script>" +
    "<script src='static/js/socket.io.min.js'></script> " +
    "<script src='static/js/jquery.min.js'></script> "+
    "<script src='static/js/bootstrap.min.js'></script> "+

    "<script src='static/js/jquery-ui.js'></script> "+
    "<script src='static/js/bootstrap-colorpicker.min.js'></script> "+
    "<script src='static/js/sevenSeg.js'></script> "+
    "<script src='static/js/Silnik.js'></script> "+
    "<script src='static/js/Aplikacja.js'></script> "+
   
    "<script src='static/js/Elementy.js'></script> ";
  text4="<script> $(document).ready(function(){ var socket= io.connect('http://' + document.domain + ':' + location.port + '/test'); socket.on('newnumber',function(msg){ "+
       "LINKER_ARRAY=JSON.parse(msg.number); "+ " Variables=LINKER_ARRAY[Object.keys(LINKER_ARRAY)[0]]; " ;
  text5=$('#CODE').val();
  text6= " });"
  text7=" window.prettyPrint && prettyPrint();}); </script>";
  text8="</body></html>";
  text=text1+text2+text3+text4+text5+text6+text7+text8;
  var a = document.getElementById("a");
  var file = new Blob([text], {type: type});
  a.href = URL.createObjectURL(file);
  a.download = name;
}
