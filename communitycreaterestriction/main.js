if(window.location.pathname.startsWith('/communities/'))
{
    var interval = 0;

    var timer = setInterval(function()
    {
        interval++;
        if(document.getElementById('lconn_communities_catalog_widgets_ResultsDisplayWidget_0') !== null && ic_comm_communityUuid === "")
        {

            if(dnug.users.indexOf(lconnCurrentUser.email) < 0)
            {
                document.getElementById('createPlaceButton').outerHTML = '';
            }

            clearInterval(timer);
        }

        if(interval > 10)
        {
            clearInterval(timer);
        }

    }, 500);
}
