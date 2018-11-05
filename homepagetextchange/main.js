var timer = setInterval(function()
{
    if(document.getElementById('activityStreamHeader') !== null)
    {
        document.querySelectorAll('#activityStreamHeader .shareSome-title')[0].innerHTML = "Welcome back, " + person.name + ". Would you like to ";

        clearInterval(timer);
    }

}, 100);
