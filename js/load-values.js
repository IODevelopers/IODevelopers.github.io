$(document).ready(function() {

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDHmBeUmbW8PHQEAXarTmtMZfw3pboGShc",
      authDomain: "karnakodekochi.firebaseapp.com",
      databaseURL: "https://karnakodekochi.firebaseio.com",
      projectId: "karnakodekochi",
      storageBucket: "karnakodekochi.appspot.com",
      messagingSenderId: "791941464258"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {

		    var xhr = new XMLHttpRequest();
			url = "https://9nvv7wpamb.execute-api.ap-southeast-1.amazonaws.com/Development/get-userdetails";
			xhr.open("POST", url, true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.onreadystatechange = function () {
		    if (xhr.readyState === 4 && xhr.status === 200) {
		        var json = JSON.parse(xhr.responseText);
		        console.log(json["Data"]);
		        $("#ads").append(json["Data"]['AdsViewed']);
		        $("#moneygen").append("₹"+ json["Data"]['MoneyGenerated']);
		        $("#moneygain").append("₹"+ json["Data"]['MoneyGained']);
		        $("#moneydon").append("₹"+ json["Data"]['MoneyDonated']);
		    	}
			};
			var data = JSON.stringify({"Username": user.uid});
			xhr.send(data);
		}
	});
      
});