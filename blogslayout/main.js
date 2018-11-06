if(window.location.pathname.startsWith('/blogs') && window.location.pathname.indexOf('/entry/') > -1)
{
    var style_element = document.createElement('style');
    style_element.setAttribute('type','text/css');
    style_element.className = 'dnug_blogs_styling';
    style_element.innerHTML = "#lotusColLeft{display:none;position:absolute;bottom:0;background:#ffffff;}#lotusColRight{position:absolute;bottom:0;right:0;}.lotusui30_layout .lotusColLeft:after{position:absolute;bottom:0;height:30px;}#lotusContent{margin-left:0px !important;}#blogCommentPanel{position:absolute;right:0;top:15px;width:400px;}#entries table.lotusTable.blogsFixedTable{width:inherit;}#blogCommentPanel::after{position:absolute;top:0;bottom:0;width:400px;background-color:#dad7d7;content:\"\";z-index:-1;}\n";
    document.getElementsByTagName('body')[0].appendChild(style_element);
}
