var user_lang = atob(dojo.cookie('user_lang').substring(0,dojo.cookie('user_lang').indexOf('=')));

if(typeof user_lang === "undefined" || user_lang === null || user_lang === "")
{
    user_lang = "en_US";
}

var strings = {
    "en_US" : { READ_MORE : 'Read more...', SHOW_LESS : 'Show less...'},
    "de_DE" : { READ_MORE : 'Weiterlesen', SHOW_LESS : 'Zeige Weniger'}
}

document.addEventListener('DOMContentLoaded', function(){

    var list = document.querySelectorAll('#entries table.blogsFixedTable > tbody > tr > td');

    for(var i = 0; i < list.length; i++)
    {
        var id                  = "blog_id_"+i;
        var entry               = list[i].querySelector('div.entryContentContainer.blogsWrapText');
        entry.style.maxHeight   = "200px";
        entry.style.overflowY   = "hidden";

        entry.setAttribute('data-blog_id',id);
        entry.setAttribute('data-expanded', false);

        var link            = document.createElement('a');
        link.marginTop      = "20px";
        link.marginBottom   = "20px";

        link.setAttribute('data-blog_id',id);
        link.appendChild(document.createTextNode(strings[user_lang]["READ_MORE"]));
        link.setAttribute('href',"javascript:void(0);");

        link.addEventListener('click', function(e)
        {
            e.preventDefault();
            var link = this;
            var id = link.getAttribute('data-blog_id');

            var entry = document.querySelector("div[data-blog_id='"+id+"']");

            if(entry.getAttribute("data-expanded") == "true")
            {
                entry.style.maxHeight = "200px";
                entry.style.overflowY = "hidden";
                entry.setAttribute('data-expanded',false);
                link.innerText = strings[user_lang]["READ_MORE"];
            }
            else
            {
                entry.style.maxHeight   = "";
				entry.style.height      = "auto";
                entry.style.overflowY   = "auto";
                entry.setAttribute('data-expanded',true);
                link.innerText = strings[user_lang]["SHOW_LESS"];
            }


        }, false);
        list[i].appendChild(link);
    }

},false);
