// Smooth Scroll
$("nav ul li a").click(function () {
  const thisSection = $(this).attr("href");
  $("html,body")
    .stop()
    .animate(
      { scrollTop: $(thisSection).offset().top - 120 },
      600,
      "easeInCirc"
    );
  return false;
});

$(".logo").click(function () {
  $("html,body")
    .stop()
    .animate({ scrollTop: $("body").offset().top }, 600, "easeInCirc");
  return false;
});

// Flexslider
$(window).on("load", function () {
  $(".flexslider").flexslider({
    animation: "slide",
    slideshowSpeed: 3000,
    pauseOnHover: true,
    directionNav: false,
    before: function () {
      $(".cta").css("bottom", "-223px");
    },
    start: function () {
      $(".cta").animate({ bottom: "0" }, 600, "easeInCirc");
    },
    after: function () {
      $(".cta").animate({ bottom: "0" }, 600, "easeInCirc");
    },
  });
});

// Tabs
$("#tabs > ul >li >a").click(function () {
  $("#tabs > ul >li >a").css({ background: "#C8D6AF" });
  $(this).css({ background: "#F7FFEA" });
  const thistab = $(this).attr("href");
  $("#tabs >div:visible").fadeOut(200, function () {
    $(thistab).fadeIn(200);
  });
});

// Content Rotator
let counter = 1;
function contentRotator() {
  $(`#rotator blockquote:nth-child(${counter})`).fadeIn(2000, function () {
    if ($(this).is("#rotator blockquote:last-child")) {
      setTimeout(function () {
        $(`#rotator blockquote:nth-child(${counter})`).fadeOut(
          2000,
          function () {
            counter = 1;
            contentRotator();
          }
        );
      }, 5000);
    } else {
      setTimeout(function () {
        $(`#rotator blockquote:nth-child(${counter})`).fadeOut(
          2000,
          function () {
            counter++;
            contentRotator();
          }
        );
      }, 5000);
    }
  });
}

contentRotator();

// Features Rotator
function RO() {
  const count = $("#feature-container .eachfeature li").length;
  const liheight = $("#feature-container .eachfeature li").first().height();

  let topPosition = 0;
  let counter1 = 0;

  $(" #features .eachfeature")
    .clone()
    .appendTo("#feature-container #features ");
  $("#features ul:first-of-type li:nth-child(1)").css({
    color: "#FF5964",
    fontWeight: "600",
  });

  function slider() {
    setTimeout(function () {
      counter1++;
      if (counter1 > count) {
        $("#features ul:first-of-type ").remove();
        $(" #features .eachfeature")
          .clone()
          .appendTo("#feature-container #features");
        $("#features").css("top", "0");
        counter1 = 0;
        topPosition = 0;
        $("#features ul:first-of-type li:nth-child(1)").css({
          color: "#FF5964",
          fontWeight: "600",
        });
        slider();
      } else {
        topPosition = `-${counter1 * liheight}px`;
        $("#features").animate({ top: topPosition }, 700, function () {
          $(`#features ul:first-of-type li:nth-child(${counter1 + 1})`).css({
            color: "#FF5964",
            fontWeight: "600",
          });
          slider();
        });
      }
    }, 1500);
  }
  slider();
}

RO();

// function Rot(){
// let counter1 = 1;
// let topPosition = 0;
// const count = $("#features ul:first-of-type li").length;
// let n1 = $("#features ul:first-of-type").clone();
// $("#features ul:first-of-type li:nth-child(1)").css({ color: "#FF5964", fontWeight: "600" });
// $("#features").append(n1);

// function slider() {
//   setTimeout(function() {
//   console.log("counter:",counter1);
//   console.log("top:",topPosition);
//   if (counter1 <= count ) {
//     topPosition -= 30;
//     $("#features").animate({ top: topPosition + "px" }, 500, function() {
//       $("#features ul:first-of-type li:nth-child(" + (counter1 + 1) + ")").css({ color: "#FF5964", fontWeight: "600" });
//       counter1++;
//       slider();
//     });
//   } else {
//     $("#features ul:first-of-type").remove();
//     n = $("#features ul:first-of-type").clone();
//     $("#features").css("top", "0");
//     $("#features").append(n);
//     topPosition = 0;
//     counter1 = 1;
//     $("#features ul:first-of-type li:nth-child(1)").css({ color: "#FF5964", fontWeight: "600" });
//     slider();
//   }
// }, 1500);
// }
// slider();

// }
// Rot();

// function Rotator() {
//   let t = 1,
//     e = 0;
//   const o = $("#features ul:first-of-type li").length;
//   let n = $("#features ul:first-of-type").clone();
//   $("#features ul:first-of-type li:nth-child(1)").css({ color: "#FF5964", fontWeight: "600" });
//   $("#features").append(n);
//   //console.log(o);

//   function i() {
//     setTimeout(function() {
//       if (t <= o) {
//         e -= 30;
//         $("#features").animate({ top: e + "px" }, 500, function() {
//           $("#features ul:first-of-type li:nth-child(" + (t + 1) + ")").css({ color: "#FF5964", fontWeight: "600" });
//           t++;
//           i();
//         });
//       } else {
//         $("#features ul:first-of-type").remove();
//         n = $("#features ul:first-of-type").clone();
//         $("#features").css("top", "0");
//         $("#features").append(n);
//         e = 0;
//         t = 1;
//         $("#features ul:first-of-type li:nth-child(1)").css({ color: "#FF5964", fontWeight: "600" });
//         i();
//       }
//     }, 1500);
//   }

//   i();
// }

// Rotator();

// function Rotator(){
//     let t=1,
//     e=0;
//     const o=$("#features ul:first-of-type li").length;
//     let n=$("#features ul:first-of-type").clone();
//     $("#features ul:first-of-type li:nth-child(1)").css({color:"#FF5964",fontWeight:"600"}),
//     $("#features").append(n),
//     function i(){setTimeout(function(){
//         t<=o?(e-=30,$("#features").animate({top:e+"px"},500,
//         function(){
//             $("#features ul:first-of-type li:nth-child("+(t+1)+")").css({color:"#FF5964",fontWeight:"600"}),
//             t++,i()})):($("#features ul:first-of-type").remove(),
//             n=$("#features ul:first-of-type").clone(),
//             $("#features").css("top","0"),
//             $("#features").append(n),e=0,t=1,
//             $("#features ul:first-of-type li:nth-child(1)").css({color:"#FF5964",fontWeight:"600"}),i())},1500)}()}
//             Rotator();
