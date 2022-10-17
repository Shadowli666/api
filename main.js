
// DOLAR TODAY
//https://s3.amazonaws.com/dolartoday/data.json
// BCV
//https://api.exchangedyn.com/markets/quotes/usdves/bcv?fbclid=IwAR0VKRtIIlO3tthfNKJ2tu9EUmtujb-6VuxfwfrKgMbaY1fAE8et8w1jQuM
// $.getJSON("https://s3.amazonaws.com/dolartoday/data.json",function(data){
//   console.log(data)
//   $('#texto').html('BCV: ' + data.USD.sicad2);
//   $('#al').html(data._timestamp.fecha);
//     });

$.getJSON("https://api.exchangedyn.com/markets/quotes/usdves/bcv?fbclid=IwAR0VKRtIIlO3tthfNKJ2tu9EUmtujb-6VuxfwfrKgMbaY1fAE8et8w1jQuM",function(data){
      const navigatorLanguage = navigator.language
      //bank source name
      $('#banco').html(data.name)
      //price 
      $('#texto').html(data.sources.BCV.quote)
      //date retrieved
      let date = new Date(data.sources.BCV.last_retrieved)
      let dateOptions = {year: 'numeric', month: 'long', day: 'numeric'};
      let hourOptions = {hour: '2-digit', minute: '2-digit'};
      formatedDate = date.toLocaleDateString(navigatorLanguage,dateOptions)
      //formatedHour = date.toLocaleDateString([],{})
      $('#al').html(formatedDate)
      //$('#el').html(formatedHour)
        });