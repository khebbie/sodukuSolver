var welcome = (function(){
  removeValueFromArray = function (arr, val){
    var index = arr.indexOf(val);

    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
  isIn = function (row, column, arr){
    return $.inArray(row, arr) !== -1 && $.inArray(column, arr) !== -1;

  }
  getValidsForColumn= function (column){
    var valids = [1,2,3,4,5,6,7,8,9];
    var as = _.map(valids, function(num) { return column + num; });

    _.each(as, function(entry){
      var val = $("#" + entry + " input[type=number]").val();
      valids = removeValueFromArray(valids, parseInt(val,10));
    });

    return valids;
  }
  getValidsForRow= function (row){
    var valids = [1,2,3,4,5,6,7,8,9];
    var columns = ["a","b","c","d","e","f","g","h","i"];
    var as = _.map(columns, function(col) { return col + row; });

    _.each(as, function(entry){
      var val = $("#" + entry + " input[type=number]").val();
      valids = removeValueFromArray(valids, parseInt(val,10));
    });

    return valids;
  }
  
  getValidsForThreeByThree= function (startCols, startRows){
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
  getValidsForThreeByThreeAsString= function (row, column){
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
  return{
    hasBeenSolved: function (solution){
      var solved = true;
      for (var key in solution) {
       if(key.length!==0){
         solved=false;
       }
     }
     return solved;
   },
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
  solve: function (){
    $("#a").text(getValidsForColumn("a"));
    $("#b").text(getValidsForColumn("b"));
    $("#c").text(getValidsForColumn("c"));
    $("#d").text(getValidsForColumn("d"));
    $("#e").text(getValidsForColumn("e"));
    $("#f").text(getValidsForColumn("f"));
    $("#g").text(getValidsForColumn("g"));
    $("#h").text(getValidsForColumn("h"));
    $("#i").text(getValidsForColumn("i"));

    $("#1").text(getValidsForRow("1"));
    $("#2").text(getValidsForRow("2"));
    $("#3").text(getValidsForRow("3"));
    $("#4").text(getValidsForRow("4"));
    $("#5").text(getValidsForRow("5"));
    $("#6").text(getValidsForRow("6"));
    $("#7").text(getValidsForRow("7"));
    $("#8").text(getValidsForRow("8"));
    $("#9").text(getValidsForRow("9"));


    $("#sa1").text(getValidsForThreeByThree(["a","b","c"], [1,2,3]));
    $("#sd1").text(getValidsForThreeByThree(["d","e","f"], [1,2,3]));
    $("#sg1").text(getValidsForThreeByThree(["g","h","i"], [1,2,3]));
    $("#sa4").text(getValidsForThreeByThree(["a","b","c"], [4,5,6]));
    $("#sd4").text(getValidsForThreeByThree(["d","e","f"], [4,5,6]));
    $("#sg4").text(getValidsForThreeByThree(["g","h","i"], [4,5,6]));
    $("#sa7").text(getValidsForThreeByThree(["a","b","c"], [7,8,9]));
    $("#sd7").text(getValidsForThreeByThree(["d","e","f"], [7,8,9]));
    $("#sg7").text(getValidsForThreeByThree(["g","h","i"], [7,8,9]));


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
}
})();
//For IE8- support include this tiny Array.forEach* polyfill:
//From: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/forEach

if ( !Array.prototype.forEach ) {
    Array.prototype.forEach = function(fn, scope) {
        for(var i = 0, len = this.length; i < len; ++i) {
            fn.call(scope, this[i], i, this);
        }
    }
}

function queryObj() {
    var result = {}, keyValuePairs = location.search.slice(1).split('&');

    keyValuePairs.forEach(function(keyValuePair) {
        keyValuePair = keyValuePair.split('=');
        result[keyValuePair[0]] = keyValuePair[1] || '';
    });

    return result;
}

function hidehints(hide){
  $("#hintTable").toggle(!hide);
  $("#x").toggle(!hide);
  $("#a").toggle(!hide);
  $("#b").toggle(!hide);
  $("#c").toggle(!hide);
  $("#d").toggle(!hide);
  $("#e").toggle(!hide);
  $("#f").toggle(!hide);
  $("#g").toggle(!hide);
  $("#h").toggle(!hide);
  $("#i").toggle(!hide);

  $("#1").toggle(!hide);
  $("#2").toggle(!hide);
  $("#3").toggle(!hide);
  $("#4").toggle(!hide);
  $("#5").toggle(!hide);
  $("#6").toggle(!hide);
  $("#7").toggle(!hide);
  $("#8").toggle(!hide);
  $("#9").toggle(!hide);
}

$( document ).ready(function() {

  var qo = queryObj();
  var url = "";

  if(qo.id){
      url = "/sudokus/"+ qo.id +".json"
  }
  else
  {
    url = "/sudokus/1.json"
  }

  $.get( url, function( data ) {
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
      solution = welcome.solve();
      
      if(welcome.hasBeenSolved(solution)){
       break; 
     }
   }
 });

$('input[type="checkbox"]').on('change', function() {
  hidehints(this.checked);
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
});