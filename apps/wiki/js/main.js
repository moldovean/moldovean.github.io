$(document).ready(function(){
  $("#strToSearch").on("keypress",function(key){
      if(key.keyCode==13) $("#search").click();
  });

  $("#search").on("click",function(){
      var strToSearch = $("#strToSearch").val();
      $("#results").html("<p> We will look for: "+strToSearch+"</p>");

      $.ajax({
        type: 'GET',
        url: '//en.wikipedia.org/w/api.php',
        data: { action: 'query', list: 'search', srsearch: strToSearch, format: 'json' },
        dataType: 'jsonp',
        success: function(data){
          //$("#results").append(JSON.stringify(data));
          data["query"]["search"].forEach(function(result){
            resultStr ="<div class='result'>";
            resultStr+="<a href="+'https://en.wikipedia.org/wiki/'+encodeURI(result.title)+"><h3>"+result.title+"</h3></a>";
            resultStr+="<p>"+result.snippet+"</p>";
            resultStr +="</div>";
            $("#results").append(resultStr);
          })
        },
      });

  });
});

function begin(){


}
