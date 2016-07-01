// random color generator
function randomColor(str){
    str += [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)];
    if (str.length==6) return "#"+str;
    else return randomColor(str)}

$(document).ready(function(){

  $("#head").css("padding-top", Math.floor($(window).height()*0.08));
  $("#main-content").css("padding-top", Math.floor($(window).height()*0.03));
  $("#myTV").css("height",Math.floor($(window).height()*0.64));




  $("#quote-btn").on("click",function(){
    $.getJSON("/json/quotes.json",function(json){
      var myHTML="";
      var quoteNr = Math.floor(Math.random()*10);
      myHTML += json.quotes[quoteNr].quote;

      $("#quote-text").html(myHTML);
      $(".quote-author").html(json.quotes[quoteNr].author);
      var rCol = randomColor("");
      //$(".color-me").css("background-color",rCol);
      $(".color-me").animate({
        backgroundColor: rCol}, 500);
      $(".fa-twitter-square").animate({
        color: rCol}, 500);
      // for twitter
      //var tweetStr ="hashtags=iaka"+"&text="+ json.quotes[quoteNr].quote.slice(0,80);
      var tweetStr ="https://twitter.com/intent/tweet?";
      var authorStr = json.quotes[quoteNr].author.split(" ").join("");
      tweetStr+="hashtags="+authorStr+"&text="+ json.quotes[quoteNr].quote.slice(0,110)+" @moldovean";
      $("#twitter").attr('href',tweetStr);

    });
  });


});
