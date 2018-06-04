var LINKER_ARRAY;
var RUN = true;
var PROJECT = true;

function SwitchProject_Run() {
  RUN = !RUN;
  if (RUN == true) {
    for (x in OBJECTS) {
      $("#" + x + " > button").hide();
    }
    $("#SEVENDIGSET_0").empty(); //////////TU JEST KLUCZ DO SEVENDIGA

  }
  if (RUN == false) {
    for (x in OBJECTS) {
      $("#" + x + " > button").show();
    }
    if (typeof RUNID !== 'undefined') {
      clearInterval(RUNID);
    }
  }
}


$("#myFile").bind("change", function() { //ŁADOWANIE WIZUALIZACJI
  if (this.files && this.files[0]) {
    var myFile = this.files[0];
    var reader = new FileReader();
    reader.addEventListener('load', function(e) {
      $("#Wizualizacja-generator").html("");
      $("#Wizualizacja-generator").html(e.target.result);
    });
    reader.readAsBinaryString(myFile);
  }
});
$(".New").mouseover(function() {
 switch ($(this).attr('id')) {
  case "New-1":
    $('#New-info').empty();
    $('#New-info').append("Tip:Tworzy nowy katalog projektowy i umieszcza w nim tworzoną wizualizacje. Pamiętaj o różnych możliwych wersjach konfiguracyjnych sterownika. Przed rozpoczęciem wybierz porzadaną konfigurację ")
    break;
  case "New-2":
    $('#New-info').empty();
      $('#New-info').append("Tip:Tworzy nową wizualizacje w już utworzonym katalogu projektowym. Przed rozpoczęciem sprawdż dostępny strumień danych wizualizacyjnych.")
    break;
  case "New-3":
    $('#New-info').empty();
    $('#New-info').append("Edytor dostępnych wizualizacji")
    break;
  default:
}}); //Piersze modalne okno po uruchomieniu
$(".New").focus(function() {
 switch ($(this).attr('id')) {
  case "New-1":
    $('#New-options').empty();
    $('#New-options').append("<p>Nazwa Projektu : </p><input class='form-control' type='text'> <p>Nazwa Wizualizacji : </p><input class='form-control' type='text'>")
    break;
  case "New-2":
    $('#New-options').empty();
      $('#New-options').append("<input class='form-control' type='text'>")
    break;
  case "New-3":
    $('#New-options').empty();
    $('#New-options').append("Edytor dostępnych wizualizacji")
    break;
  default:
}});



function Save_Project(name, type) { //ZAPISYWANIE WIZUALIZACJI
  text1 = "<html><head>" +
    "<meta charset='utf-8'>" +
    "<meta http-equiv='X-UA-Compatible' content='IE=edge'> " +
    "<meta name='viewport' content='width=device-width, initial-scale=1'> " +

    "<title>Bartosz Rogoz</title>" +

    "<meta name='description' content='Praca Magisterska - Bartosz Rogoz'> " +
    "<meta name='author' content='Bartosz Rogoz'> " +

    "<link href='static/css/bootstrap.min.css' rel='stylesheet'></link> " +
    "<link href='static/css/style.css' rel='stylesheet'></link> "
  "<link href='static/cssjquery-ui.css' rel='stylesheet'></link> " +
  "  <link href='static/css/bootstrap-colorpicker.min.css' rel='stylesheet'> </link> </head> <body> "; //Moze być z kompilacja
  text2 = $("#Wizualizacja-generator").html();
  text3 = "<script src='https://code.jquery.com/jquery-1.12.4.js'></script>" +
    "<script src='static/js/socket.io.min.js'></script> " +
    "<script src='static/js/jquery.min.js'></script> " +
    "<script src='static/js/bootstrap.min.js'></script> " +

    "<script src='static/js/jquery-ui.js'></script> " +
    "<script src='static/js/bootstrap-colorpicker.min.js'></script> " +
    "<script src='static/js/sevenSeg.js'></script> " +
    "<script src='static/js/Silnik.js'></script> " +
    "<script src='static/js/Aplikacja.js'></script> " +

    "<script src='static/js/Elementy.js'></script> ";
  text4 = "<script> $(document).ready(function(){ var socket= io.connect('http://' + document.domain + ':' + location.port + '/test'); socket.on('newnumber',function(msg){ " +
    "LINKER_ARRAY=JSON.parse(msg.number); " + " Variables=LINKER_ARRAY[Object.keys(LINKER_ARRAY)[0]]; ";
  text5 = $('#CODE').val();
  text6 = " });"
  text7 = " window.prettyPrint && prettyPrint();}); </script>";
  text8 = "</body></html>";
  text = text1 + text2 + text3 + text4 + text5 + text6 + text7 + text8;
  //var a = document.getElementById("a");
  //var file = new Blob([text], {type: type});
  //a.href = URL.createObjectURL(file);
  //a.download = name;
  var dict = {
    'data': text,
    'name': 'IZA.html'
  };
  $.ajax({
    type: "POST",
    url: 'http://' + document.domain + ':' + location.port + '/uploads',
    data: dict,
    datatype: text
  });
}

function Server_danych_test_body_fun() {
  console.log("A")
  var socket = io.connect("http://192.168.137.100:5000/test");
  socket.on('newnumber', function(msg) {
    LINKER_ARRAY = JSON.parse(msg.number);
    console.log(LINKER_ARRAY);
    socket.removeAllListeners("newnumber");
    Variables = LINKER_ARRAY[Object.keys(LINKER_ARRAY)[0]];
    $("#Server_danych_test_body").empty();
    $("#Server_danych_test_body").append("<p1>Dostepne Zmienne procesowe:</p1>");
    for (var x in Variables) {
      $("#Server_danych_test_body").append("<p>" + x + " : " + Variables[x] + "<p>");
    }
    $("#Server_danych_test_body").append("<p>Czasu Sterownika STM : " + Object.keys(LINKER_ARRAY)[0] + "<p>");
  })


}
