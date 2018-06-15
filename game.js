$( document ).ready(function() {
  var ans_box;
  var ans_color;
  var correct=false;
  var getColor=function(){
    var n1=Math.floor(Math.random() * (250 - 0 + 1));
    var n2=Math.floor(Math.random() * (250 - 0 + 1));
    var n3=Math.floor(Math.random() * (250 - 0 + 1));
    return "rgb("+n1+","+n2+","+n3+")"
  };
  var reset=function(){

    $("#header").css('background-color','#07133d');
    ans_box=Math.floor(Math.random() * (6 - 1 + 1)+1);
    console.log(ans_box);
    for(var i=1;i<=6;i++){
      $("#box"+i).css('background-color',getColor());
    };
    ans_color=$("#box"+ans_box).css('background-color');
    $("#guess-color").html(ans_color);
  };
  reset();
  $("#reset-btn").click(function(){reset();});
  $("#box1").click(function(){
    if(!correct){
      if($(this).css('background-color')==ans_color){
        alert("correct");
        correct=true;
        $("#header").css('background-color',ans_color);
      }
      else{
        $(this).css('background-color',$('body').css('background-color'));
        alert("try again");
      }
    }
  });
  $("#box2").click(function(){
    if(!correct){
      if($(this).css('background-color')==ans_color){
        alert("correct");
        correct=true;
        $("#header").css('background-color',ans_color);
      }
      else{
        $(this).css('background-color',$('body').css('background-color'));
        alert("try again");
      }
    }
  });
  $("#box3").click(function(){
    if(!correct){
      if($(this).css('background-color')==ans_color){
        alert("correct");
        correct=true;
        $("#header").css('background-color',ans_color);
      }
      else{
        $(this).css('background-color',$('body').css('background-color'));
        alert("try again");
      }
    }
  });
  $("#box4").click(function(){
    if(!correct){
      if($(this).css('background-color')==ans_color){
        alert("correct");
        correct=true;
        $("#header").css('background-color',ans_color);
      }
      else{
        $(this).css('background-color',$('body').css('background-color'));
        alert("try again");
      }
    }
  });
  $("#box5").click(function(){
    if(!correct){
      if($(this).css('background-color')==ans_color){
        alert("correct");
        correct=true;
        $("#header").css('background-color',ans_color);
      }
      else{
        $(this).css('background-color',$('body').css('background-color'));
        alert("try again");
      }
    }
  });
  $("#box6").click(function(){
    if(!correct){
      if($(this).css('background-color')==ans_color){
        alert("correct");
        correct=true;
        $("#header").css('background-color',ans_color);
      }
      else{
        $(this).css('background-color',$('body').css('background-color'));
        alert("try again");
      }
    }
  });





});
