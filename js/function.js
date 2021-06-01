$(".jumbotron h1").click(function() {
  $(".jumbotron h1").animate({});
});
// var expanded = false;
// $(".jumbotron h1").click(function() {
//   if (!expanded) {
//     anime({
//       targets: "#J",
//       translateX: "-100%",
//       translateY: "-100%",
//       rotate: "4turn",
//       duration: 2000
//     });
//     anime({
//       targets: "#S",
//       translateX: "100%",
//       translateY: "-100%",
//       rotate: "4turn",
//       duration: 2000
//     });
//     anime({
//       targets: "#O",
//       translateX: "-100%",
//       translateY: "100%",
//       rotate: "4turn",
//       duration: 2000
//     });
//     anime({
//       targets: "#N",
//       translateX: "100%",
//       translateY: "100%",
//       rotate: "4turn",
//       duration: 2000
//     });

//     $(".jumbotron h1").css("border", "none");
//     $("#J").css("border", "10px white solid");
//     $("#S").css("border", "10px white solid");
//     $("#O").css("border", "10px white solid");
//     $("#N").css("border", "10px white solid");
//   } else if (expanded) {
//     anime({
//       targets: "#J",
//       translateX: "0%",
//       translateY: "+0%",
//       duration: 2000,
//       rotate: 0
//     });
//     anime({
//       targets: "#S",
//       translateX: "0%",
//       translateY: "0%",
//       duration: 2000,
//       rotate: 0
//     });
//     anime({
//       targets: "#O",
//       translateX: "0%",
//       translateY: "0%",
//       duration: 2000,
//       rotate: 0
//     });
//     anime({
//       targets: "#N",
//       translateX: "0%",
//       translateY: "0%",
//       duration: 2000,
//       rotate: 0
//     });

//     $("#J").css("border", "none");
//     $("#S").css("border", "none");
//     $("#O").css("border", "none");
//     $("#N").css("border", "none");
//     $(".jumbotron h1").css("border", "15px solid #fff");
//   }
//   expanded = !expanded;
// });

//asdfasdf

var dates = ["1/13/2013", "12/24/2015", "11/1/2017", "11/24/2019"];
var works = [
  {
    title: "Chemistry Tutor",
    description:
      "Mentored over 50 students with strong emphasis on the importance of enthusiasm and self motivation for academic success"
  },
  {
    title: "US Army Combat Medic",
    description:
      "Trained extensively in advanced lifesaving techniques, communications, and casualty transportation skills to provide best care in remote locations"
  },
  {
    title: "Support Engineer",
    description:
      "Diagnosed and maintained Bitlocker encryption on 35 military grade laptops to prevent unauthorized changes or firmware-level malware."
  },
  {
    title: "Coding Bootcamp Graduate",
    description:
      "Completed an intensive full-stack web development program to build web applications with emphasis on mvc framework and object-oriented programming"
  }
];
//For the purpose of stringifying MM/DD/YYYY date format
var monthSpan = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

//Format MM/DD/YYYY into string
function dateSpan(date) {
  var month = date.split("/")[0];
  month = monthSpan[month - 1];
  var day = date.split("/")[1];
  if (day.charAt(0) == "0") {
    day = day.charAt(1);
  }
  var year = date.split("/")[2];

  //Spit it out!
  return month + " " + day + ", " + year;
}

//Main function. Draw your circles.
function makeCircles() {
  //Forget the timeline if there's only one date. Who needs it!?
  if (dates.length < 2) {
    $("#line").hide();
    $("#span")
      .show()
      .text(dateSpan(dates[0]));
    //This is what you really want.
  } else if (dates.length >= 2) {
    //Set day, month and year variables for the math
    var first = dates[0];
    var last = dates[dates.length - 1];

    var firstMonth = parseInt(first.split("/")[0]);
    var firstDay = parseInt(first.split("/")[1]);
    var firstYear = parseInt(first.split("/")[2]);

    var lastMonth = parseInt(last.split("/")[0]);
    var lastDay = parseInt(last.split("/")[1]);
    var lastYear = parseInt(last.split("/")[2]);

    //Integer representation of the last day. The first day is represnted as 0
    var lastInt =
      (lastYear - firstYear) * 365 +
      (lastMonth - firstMonth) * 30 +
      (lastDay - firstDay);

    //Draw first date circle
    $("#line").append(
      '<div class="circle" id="circle0" style="left: ' +
        0 +
        '%;"><div class="popupSpan">' +
        dateSpan(dates[0]) +
        "</div></div>"
    );

    $("#mainCont").append(
      '<span id="span0" class="center">' + dateSpan(dates[0]) + "</span>"
    );

    //Loop through middle dates
    for (i = 1; i < dates.length - 1; i++) {
      var thisMonth = parseInt(dates[i].split("/")[0]);
      var thisDay = parseInt(dates[i].split("/")[1]);
      var thisYear = parseInt(dates[i].split("/")[2]);

      //Integer representation of the date
      var thisInt =
        (thisYear - firstYear) * 365 +
        (thisMonth - firstMonth) * 30 +
        (thisDay - firstDay);

      //Integer relative to the first and last dates
      var relativeInt = thisInt / lastInt;

      //Draw the date circle
      $("#line").append(
        '<div class="circle" id="circle' +
          i +
          '" style="left: ' +
          relativeInt * 100 +
          '%;"><div class="popupSpan">' +
          dateSpan(dates[i]) +
          "</div></div>"
      );

      $("#mainCont").append(
        '<span id="span' +
          i +
          '" class="right">' +
          dateSpan(dates[i]) +
          "</span>"
      );
    }

    //Draw the last date circle
    $("#line").append(
      '<div class="circle" id="circle' +
        i +
        '" style="left: ' +
        99 +
        '%;"><div class="popupSpan">' +
        dateSpan(dates[dates.length - 1]) +
        "</div></div>"
    );

    $("#mainCont").append(
      '<span id="span' + i + '" class="right">' + dateSpan(dates[i]) + "</span>"
    );
  }

  $(".circle:first").addClass("active");
}

// makeCircles();

$(".circle").mouseenter(function() {
  $(this).addClass("hover");
});

$(".circle").mouseleave(function() {
  $(this).removeClass("hover");
});

// $(".circle").click(function() {
//   var spanNum = $(this).attr("id");
//   var index = spanNum[spanNum.length - 1];
//   selectDate(spanNum);
//   var context = `<h1 class="work-title">${works[index].title}</h1><h3 class="work-desc mb-5">${works[index].description}</h3>`;
//   $(".center").html(context);
// });

// selectDate("circle0");
// var context = `<h1 class="work-title">${works[0].title}</h1><h3 class="work-desc mb-5">${works[0].description}</h3>`;
// $(".center").html(context);

// function selectDate(selector) {
//   $selector = "#" + selector;
//   $spanSelector = $selector.replace("circle", "span");
//   var current = $selector.replace("circle", "");

//   $(".active").removeClass("active");
//   $($selector).addClass("active");

//   if ($($spanSelector).hasClass("right")) {
//     $(".center")
//       .removeClass("center")
//       .addClass("left");
//     $($spanSelector).addClass("center");
//     $($spanSelector).removeClass("right");
//   } else if ($($spanSelector).hasClass("left")) {
//     $(".center")
//       .removeClass("center")
//       .addClass("right");
//     $($spanSelector).addClass("center");
//     $($spanSelector).removeClass("left");
//   }
// }
