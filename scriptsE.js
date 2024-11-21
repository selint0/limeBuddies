"use strict"; 

$(function() {
  $(".accordion").accordion({
      
  });
});

var settings = {
  "url": "https://0adcaadc-d0f7-4044-b9d3-64426f2cd50e.mock.pstmn.io/events",
  "method": "GET",
  "dataType": "JSON",
  "timeout": 0,
};

$.ajax(settings).done(function (data) {
  console.log(data);
  $("#event1").html("<p>" + data[0].event + "<br>" + data[0].date + "<br>" + data[0].street_name + "<br> For more information contact: " + data[0].email + "</p>");
  $("#event2").html("<p>" + data[1].event + "<br>" + data[1].date + "<br>" + data[1].street_name + "<br> For more information contact: " + data[1].email + "</p>");
  $("#event3").html("<p>" + data[2].event + "<br>" + data[2].date + "<br>" + data[2].street_name + "<br> For more information contact: " + data[2].email + "</p>");
  $("#event4").html("<p>" + data[3].event + "<br>" + data[3].date + "<br>" + data[3].street_name + "<br> For more information contact: " + data[3].email + "</p>");
  $("#event5").html("<p>" + data[4].event + "<br>" + data[4].date + "<br>" + data[4].street_name + "<br> For more information contact: " + data[4].email + "</p>");
  $("#event6").html("<p>" + data[5].event + "<br>" + data[5].date +  "<br>" + data[5].street_name + "<br> For more information contact: " + data[5].email + "</p>");
});

