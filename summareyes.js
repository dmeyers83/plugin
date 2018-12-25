$(document).ready(function() {
    $("#webframe").hide();
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        console.log(tabs[0].url);
        var currentUrl = tabs[0].url;
        asin = currentUrl.match("/([a-zA-Z0-9]{10})(?:[/?]|$)");
        console.log(asin[1]);
        if(asin){
            $('.title').html(asin[1]);
            setURLprod = "https://www.summareyes.com/?asin=" + asin[1]+ "&chrome=Y";
            setURLdev= "http://localhost:3000/?asin=" + asin[1] + "&chrome=Y";
            $("#webframe").attr('src', setURLdev);
            $("#webframe").show();
            $('.title').hide();
        }//
        else{
            $('.title').html("You are not at a valid Amazon product page.");
        }

    });
}

);