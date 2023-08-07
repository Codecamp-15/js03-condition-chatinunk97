browser = prompt("Gib browser pls")
browser = browser.toLowerCase()
if (browser == "edge"){
    alert("You've got the Edge!")
}
else if (browser == "chrome" || browser == "firefox" || browser == "safari" || browser =="opera"){
    alert("Okay we support these browser too")
}
else{
    alert("We hope that this page looks ok!")
}