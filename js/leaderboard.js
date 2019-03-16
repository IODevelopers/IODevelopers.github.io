$(document).ready(function() {
    // all custom jQuery will go here
    $.getJSON("https://9nvv7wpamb.execute-api.ap-southeast-1.amazonaws.com/Development/get-leaderboard", function(data){
        for (var i = 0, len = data.length; i < len; i++) {
            console.log(data[i]);
            $("#addtbody").append("<tr><td>"+data[i]['Rank']+"</td><td>"+data[i]['DisplayName']+"</td><td>"+data[i]['AdsViewed']+"</td><td>"+data[i]['MoneyGenerated']+"</td><td>"+data[i]['MoneyDonated']+"</td><td>"+data[i]['MoneyGained']+"</td><td>"+data[i]['Percentage']+"</td></tr>");
        }
    });
      
});