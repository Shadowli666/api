//https://s3.amazonaws.com/dolartoday/data.json
$.getJSON("https://s3.amazonaws.com/dolartoday/data.json",function(data){
  console.log(data)
  $('#texto').html('BCV: ' + data.USD.sicad2);
  $('#al').html(data._timestamp.fecha);
    });