
$("textarea").keydown(function(e){
    var KN;
      if(window.event) {
          KN = e.keyCode;
        // Netscape/Firefox/Opera
        } else if(e.which) {
          KN = e.which;
        }

    if(KN == 13 && $(this).val().split("\n").length >= $(this).attr("rows")) 
            return false;
        
});



var orderState  = 0;
$("#btn222").click(function() {
  $("#inpDef").attr("rows","4");
  $("#inpMid").attr("rows","4");
  $("#inpFor").attr("rows","4");
  $(this).removeClass("btn-success").addClass("btn-danger");
  $(this).siblings().removeClass("btn-danger").addClass("btn-success");
  $(".jokerCont").hide();
  orderState=0;
  $("#spGK").text("(2 kişi)");
   $("#spDef").text("(4 kişi)");
    $("#spMid").text("(4 kişi)");
     $("#spFor").text("(4 kişi)");
});
$("#btn321").click(function() {
  $("#inpDef").attr("rows","6");
  $("#inpMid").attr("rows","4");
  $("#inpFor").attr("rows","2");
  $(this).removeClass("btn-success").addClass("btn-danger");
  $(this).siblings().removeClass("btn-danger").addClass("btn-success");
    $(".jokerCont").hide();
  orderState=1;
  $("#spGK").text("(2 kişi)");
   $("#spDef").text("(6 kişi)");
    $("#spMid").text("(4 kişi)");
     $("#spFor").text("(2 kişi)");
});
$("#btn231").click(function() {
  $("#inpDef").attr("rows",4);
  $("#inpMid").attr("rows",6);
  $("#inpFor").attr("rows",2);
  $(this).removeClass("btn-success").addClass("btn-danger");
  $(this).siblings().removeClass("btn-danger").addClass("btn-success");
    $(".jokerCont").hide();
  orderState=2;
  $("#spGK").text("(2 kişi)");
   $("#spDef").text("(4 kişi)");
    $("#spMid").text("(6 kişi)");
     $("#spFor").text("(2 kişi)");
});
$("#btn2211").click(function() {
  $("#inpDef").attr("rows",4);
  $("#inpMid").attr("rows",4);
  $("#inpFor").attr("rows",2);
  $(".jokerCont").show( "slow" );
  $(this).removeClass("btn-success").addClass("btn-danger");
  $(this).siblings().removeClass("btn-danger").addClass("btn-success");
  orderState=3;
  $("#spGK").text("(2 kişi)");
   $("#spDef").text("(4 kişi)");
    $("#spMid").text("(4 kişi)");
     $("#spFor").text("(2 kişi)");
});

$("#btn3111").click(function() {
  $("#inpDef").attr("rows",6);
  $("#inpMid").attr("rows",2);
  $("#inpFor").attr("rows",2);
  $(".jokerCont").show( "slow" );
  $(this).removeClass("btn-success").addClass("btn-danger");
  $(this).siblings().removeClass("btn-danger").addClass("btn-success");
  orderState=4;
  $("#spGK").text("(2 kişi)");
   $("#spDef").text("(6 kişi)");
    $("#spMid").text("(2 kişi)");
     $("#spFor").text("(2 kişi)");
});

var svg = d3.select("#svcField").append("g");
var kadrolar ={}


$("#btnMix").click(function(){
    createTeams();
  var fieldOrder= [
                    [[170,32,kadrolar.kaleciler[0]],
                    [100,100,kadrolar.defanslar[0]], [240,100,kadrolar.defanslar[1]],
                    [60,180,kadrolar.ortasahalar[0]],  [280,180,kadrolar.ortasahalar[1]],
                    [100,260,kadrolar.forvetler[0]], [240,260,kadrolar.forvetler[1]],
                    [100,370,kadrolar.forvetler[2]], [240,370,kadrolar.forvetler[3]],
                    [60,450,kadrolar.ortasahalar[2]],  [280,450,kadrolar.ortasahalar[3]],
                    [100,530,kadrolar.defanslar[2]], [240,530,kadrolar.defanslar[3]],
                    [170,608,kadrolar.kaleciler[1]]
                    ],
                    [[170,32,kadrolar.kaleciler[0]],
                    [60,100,kadrolar.defanslar[0]], [170,100,kadrolar.defanslar[1]], [280,100,kadrolar.defanslar[2]],  
                    [100,180,kadrolar.ortasahalar[0]],  [240,180,kadrolar.ortasahalar[1]], 
                    [170,260,kadrolar.forvetler[0]],
                    [170,370,kadrolar.forvetler[1]], 
                    [240,450,kadrolar.ortasahalar[2]],[60,450,kadrolar.ortasahalar[3]], 
                    [60,530,kadrolar.defanslar[3]], [170,530,kadrolar.defanslar[4]], [280,530,kadrolar.defanslar[5]],
                    [170,608,kadrolar.kaleciler[1]]
                    ],
                    [[170,32,kadrolar.kaleciler[0]],
                    [100,100,kadrolar.defanslar[0]], [240,100,kadrolar.defanslar[1]],
                    [60,180,kadrolar.ortasahalar[0]],  [170,180,kadrolar.ortasahalar[1]], [280,180,kadrolar.ortasahalar[2]],
                    [170,260,kadrolar.forvetler[0]],
                    [170,370,kadrolar.forvetler[1]], 
                    [60,450,kadrolar.ortasahalar[3]],  [170,450,kadrolar.ortasahalar[4]],[280,450,kadrolar.ortasahalar[5]],
                    [100,530,kadrolar.defanslar[2]], [240,530,kadrolar.defanslar[3]],
                    [170,608,kadrolar.kaleciler[1]]
                    ]];
 if(orderState >2)
    fieldOrder.push(
                    [[170,32,kadrolar.kaleciler[0]],
                    [100,100,kadrolar.defanslar[0]], [240,100,kadrolar.defanslar[1]],
                    [60,180,kadrolar.ortasahalar[0]],  [280,180,kadrolar.ortasahalar[1]], 
                    [190,220,kadrolar.forvetArkasi[0]],
                    [170,280,kadrolar.forvetler[0]],
                    [170,350,kadrolar.forvetler[1]],
                    [190,410,kadrolar.forvetArkasi[1]],
                    [60,460,kadrolar.ortasahalar[2]],  [280,450,kadrolar.ortasahalar[3]],
                    [100,530,kadrolar.defanslar[2]], [240,530,kadrolar.defanslar[3]],
                    [170,608,kadrolar.kaleciler[1]]
                    ],
                    [[170,32,kadrolar.kaleciler[0]],
                    [60,100,kadrolar.defanslar[0]], [170,100,kadrolar.defanslar[1]], [280,100,kadrolar.defanslar[2]],  
                    [140,180,kadrolar.ortasahalar[1]],
                    [200,220,kadrolar.forvetArkasi[0]],
                    [170,280,kadrolar.forvetler[0]],
                    [170,350,kadrolar.forvetler[1]],
                    [200,410,kadrolar.forvetArkasi[1]],
                    [140,450,kadrolar.ortasahalar[1]],
                    [60,530,kadrolar.defanslar[3]], [170,530,kadrolar.defanslar[4]], [280,530,kadrolar.defanslar[5]],
                    [170,608,kadrolar.kaleciler[1]]
                    ]
                    );
                    
var circle = svg.selectAll("circle")
    .data(fieldOrder[orderState]);
var text = svg.selectAll("text")
    .data(fieldOrder[orderState]);
    
    
    
    
   circle.enter().append("circle")
.attr("cy", function(d, i) {return d[0]; })
.attr("cx", function(d, i) {return d[1]; })
.attr("r", function(d) { return 10; })
.style("fill",function(d,i){return (i>6)?"red":"blue";});

text.enter().append("text")
.attr("y", function(d, i) {return d[0]-10; })
.attr("x", function(d, i) {return d[1]-30; })
.style("font-size", "16px")
.style("fill",function(d,i){return (i>6)?"#fffffa":"#afffff";})
.text(function(d) {
      return d[2];
    }); 
    $("button").attr("disabled", true);
    
});


function createTeams(){
    kadrolar.kaleciler = $("#inpGK").val().split(/\n/);
    karistir(kadrolar.kaleciler);
    kadrolar.defanslar = $("#inpDef").val().split(/\n/);
    karistir(kadrolar.defanslar);
    kadrolar.ortasahalar = $("#inpMid").val().split(/\n/);
    karistir(kadrolar.ortasahalar);
    kadrolar.forvetler = $("#inpFor").val().split(/\n/); 
    karistir(kadrolar.forvetler);
    if($(".jokerCont").css("display") != "none"){
         kadrolar.forvetArkasi = $("#inpAtMid").val().split(/\n/);
         karistir(kadrolar.forvetArkasi);
    }
 
}




function karistir(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}


