var welcome = (function(){
  function removeValueFromArray(arr, val){
  var index = arr.indexOf(val);

  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}
  return{
   deSerialize: function(values){
    var rows = [1,2,3,4,5,6,7,8,9];
    var columns = ["a","b","c","d","e","f","g","h","i"];
    _.each(rows, function(row){
      var validRowValues = $("#" + row).text();
      _.each(columns, function(column){
        var validColumnValues = $("#" + column).text();
        console.log(column+row);
        $("#" + column+row + " input[type=number]").val(values[column+row]);
      });
    });

    console.log(values);
  },
  serialize: function (){
    var rows = [1,2,3,4,5,6,7,8,9];
    var columns = ["a","b","c","d","e","f","g","h","i"];
    var values = {};
    _.each(rows, function(row){
      var validRowValues = $("#" + row).text();
      _.each(columns, function(column){
        var validColumnValues = $("#" + column).text();
        console.log(column+row);
        var val = $("#" + column+row + " input[type=number]").val();
        values[column+row] = val;
      });
    });

    console.log(values);
    return values;
  },
  hasBeenSolved: function (solution){
    var solved = true;
    for (var key in solution) {
     if(key.length!==0){
       solved=false;
     }
   }
   return solved;
 },
 getValidsForColumn: function (column){
  var valids = [1,2,3,4,5,6,7,8,9];
  var as = _.map(valids, function(num) { return column + num; });
  
  _.each(as, function(entry){
    var val = $("#" + entry + " input[type=number]").val();
    valids = removeValueFromArray(valids, parseInt(val,10));
  });
  
  return valids;
},

getValidsForRow: function (row){
  var valids = [1,2,3,4,5,6,7,8,9];
  var columns = ["a","b","c","d","e","f","g","h","i"];
  var as = _.map(columns, function(col) { return col + row; });
  
  _.each(as, function(entry){
    var val = $("#" + entry + " input[type=number]").val();
    valids = removeValueFromArray(valids, parseInt(val,10));
  });
  
  return valids;
},
getValidsForThreeByThree: function (startCols, startRows){
  var valids = [1,2,3,4,5,6,7,8,9];
  
  var fields = _.map(startCols, function(col) { 
    return _.map(startRows, function(row) { return col + row; }); 
  });
  _.each(fields, function(entry){
   
    _.each(entry, function(itm){
      var val = $("#" + itm + " input[type=number]").val();

      valids = removeValueFromArray(valids, parseInt(val,10));
    });
    
  });

  return valids;  
}
}
})();











function isIn(row, column, arr){
  return $.inArray(row, arr) !== -1 && $.inArray(column, arr) !== -1;
}

function getValidsForThreeByThreeAsString(row, column){
  var a1 = ["a","b","c",1,2,3];
  var d1 = ["d","e", "f", 1,2,3];
  var g1= ["g","h","i",1,2,3];
  var a4 = ["a","b","c",4,5,6];
  var d4 = ["d","e","f",4,5,6];
  var g4 = ["g","h","i",4,5,6];
  var a7 = ["a","b","c",7,8,9];
  var d7 = ["d","e","f",7,8,9];
  var g7 = ["g","h","i",7,8,9];
  
  if(isIn(row, column, a1)){
    return $("#sa1").text();
  }
  if(isIn(row, column, d1)){
    return $("#sd1").text();
  }
  if(isIn(row, column, g1)){
    return $("#sg1").text();
  }
  if(isIn(row, column, a4)){
    return $("#sa4").text();
  }
  if(isIn(row, column, d4)){
    return $("#sd4").text();
  }
  if(isIn(row, column, g4)){
    return $("#sg4").text();
  }
  if(isIn(row, column, a7)){
    return $("#sa7").text();
  }
  if(isIn(row, column, d7)){
    return $("#sd7").text();
  }
  if(isIn(row, column, g7)){
    return $("#sg7").text();
  }
}

function solve(){
  $("#a").text(welcome.getValidsForColumn("a"));
  $("#b").text(welcome.getValidsForColumn("b"));
  $("#c").text(welcome.getValidsForColumn("c"));
  $("#d").text(welcome.getValidsForColumn("d"));
  $("#e").text(welcome.getValidsForColumn("e"));
  $("#f").text(welcome.getValidsForColumn("f"));
  $("#g").text(welcome.getValidsForColumn("g"));
  $("#h").text(welcome.getValidsForColumn("h"));
  $("#i").text(welcome.getValidsForColumn("i"));
  
  $("#1").text(welcome.getValidsForRow("1"));
  $("#2").text(welcome.getValidsForRow("2"));
  $("#3").text(welcome.getValidsForRow("3"));
  $("#4").text(welcome.getValidsForRow("4"));
  $("#5").text(welcome.getValidsForRow("5"));
  $("#6").text(welcome.getValidsForRow("6"));
  $("#7").text(welcome.getValidsForRow("7"));
  $("#8").text(welcome.getValidsForRow("8"));
  $("#9").text(welcome.getValidsForRow("9"));
  
  
  $("#sa1").text(welcome.getValidsForThreeByThree(["a","b","c"], [1,2,3]));
  $("#sd1").text(welcome.getValidsForThreeByThree(["d","e","f"], [1,2,3]));
  $("#sg1").text(welcome.getValidsForThreeByThree(["g","h","i"], [1,2,3]));
  $("#sa4").text(welcome.getValidsForThreeByThree(["a","b","c"], [4,5,6]));
  $("#sd4").text(welcome.getValidsForThreeByThree(["d","e","f"], [4,5,6]));
  $("#sg4").text(welcome.getValidsForThreeByThree(["g","h","i"], [4,5,6]));
  $("#sa7").text(welcome.getValidsForThreeByThree(["a","b","c"], [7,8,9]));
  $("#sd7").text(welcome.getValidsForThreeByThree(["d","e","f"], [7,8,9]));
  $("#sg7").text(welcome.getValidsForThreeByThree(["g","h","i"], [7,8,9]));
  
  
  var rows = [1,2,3,4,5,6,7,8,9];
  var columns = ["a","b","c","d","e","f","g","h","i"];
  var solution = {};
  _.each(rows, function(row){
    var validRowValues = $("#" + row).text();
    _.each(columns, function(column){
      var validColumnValues = $("#" + column).text();
      console.log(column+row);
      var val = $("#" + column+row + " input[type=number]").val();

      if(!val){
        tbtValids = getValidsForThreeByThreeAsString(row, column);
        tbtValids = tbtValids.split(",");
        validColumnValues = validColumnValues.split(",");
        validValues = _.intersection(validColumnValues, validRowValues, tbtValids);
        console.log(validValues);
        solution[column+row] = validValues;
        if(validValues.length === 1){
          $("#" + column+row + " input[type=number]").val(validValues[0]);
          
        }
      }
    });
  });
  console.log(solution);
  return solution;
}


$( document ).ready(function() {
$.get( "/sudokus/1.json", function( data ) {
  var obj = JSON.parse( data.data );
    welcome.deSerialize(obj);
});


  $("#reset").click(function(){
    $("input[type=number]").val("");
  });

  $("#solve").on( "click", function(){
    console.clear();
    
    var solution = {};
    for(var i = 0;i < 20;i++){
      
      
      solution = solve();
      
      if(welcome.hasBeenSolved(solution)){
       break; 
     }
   }
 });


  $("#fill").on( "click", function(){
    $("#a1 input[type=number]").val("2");
    $("#c1 input[type=number]").val("8");
    $("#d1 input[type=number]").val("7");
    $("#g1 input[type=number]").val("9");
    
    $("#a3 input[type=number]").val("7");
    $("#c3 input[type=number]").val("9");
    $("#e3 input[type=number]").val("1");
    $("#f3 input[type=number]").val("5");
    $("#i3 input[type=number]").val("4");
    
    $("#g4 input[type=number]").val("1");
    $("#i4 input[type=number]").val("3");
    
    $("#a5 input[type=number]").val("1");
    $("#c5 input[type=number]").val("7");
    $("#d5 input[type=number]").val("8");
    $("#f5 input[type=number]").val("2");
    $("#h5 input[type=number]").val("6");
    
    $("#c6 input[type=number]").val("5");
    $("#h6 input[type=number]").val("2");
    $("#i6 input[type=number]").val("7");
    
    $("#b7 input[type=number]").val("9");
    $("#c7 input[type=number]").val("1");
    
    $("#b8 input[type=number]").val("2");
    $("#g8 input[type=number]").val("6");
    $("#h8 input[type=number]").val("3");
    
    $("#c9 input[type=number]").val("3");
    $("#i9 input[type=number]").val("1");
    
  });

$("#serialize").on( "click", function(){
  var values = welcome.serialize();
  
  var json = JSON.stringify(values);
    $("#serializedValues").val(json);
});

$("#deSerialize").on( "click", function(){

  values = $("#serializedValues").val();
  var obj = JSON.parse( values );
    welcome.deSerialize(obj);
});

$("#fill1").on( "click", function(){
  
  $("#b1 input[type=number]").val("6");
  $("#e1 input[type=number]").val("4");
  $("#f1 input[type=number]").val("3");
  $("#i1 input[type=number]").val("2");
  
  $("#b2 input[type=number]").val("1");
  $("#c2 input[type=number]").val("7");
  $("#d2 input[type=number]").val("9");
  $("#f2 input[type=number]").val("2");
  $("#g2 input[type=number]").val("6");
  $("#i2 input[type=number]").val("4");
  
  $("#c3 input[type=number]").val("4");
  $("#e3 input[type=number]").val("8");
  $("#h3 input[type=number]").val("3");
  
  $("#a4 input[type=number]").val("8");
  $("#c4 input[type=number]").val("5");
  $("#e4 input[type=number]").val("1");
  $("#f4 input[type=number]").val("6");
  $("#g4 input[type=number]").val("4");
  
  $("#d5 input[type=number]").val("8");
  $("#e5 input[type=number]").val("9");
  $("#g5 input[type=number]").val("2");
  $("#i5 input[type=number]").val("1");
  
  $("#a6 input[type=number]").val("2");
  $("#b6 input[type=number]").val("4");
  $("#d6 input[type=number]").val("5");
  $("#h6 input[type=number]").val("6");
  
  $("#b7 input[type=number]").val("3");
  $("#c7 input[type=number]").val("9");
  $("#d7 input[type=number]").val("4");
  $("#h7 input[type=number]").val("2");
  
  $("#b8 input[type=number]").val("8");
  $("#d8 input[type=number]").val("1");
  $("#f8 input[type=number]").val("5");
  $("#g8 input[type=number]").val("3");
  
  $("#c9 input[type=number]").val("6");
  $("#f9 input[type=number]").val("9");
  $("#h9 input[type=number]").val("1");
  $("#i9 input[type=number]").val("7");
});
});