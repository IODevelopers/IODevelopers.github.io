$(document).ready(function() {
    // all custom jQuery will go here
    $.getJSON("https://9nvv7wpamb.execute-api.ap-southeast-1.amazonaws.com/Development/get-leaderboard", function(data){

            $("#ads").append(data[0]['AdsViewed']);
            $("#moneygen").append("₹"+ data[0]['MoneyGenerated']);
            $("#moneygain").append("₹"+ data[0]['MoneyGained']);
            $("#moneydon").append("₹"+ data[0]['MoneyDonated']);
    });
      
});