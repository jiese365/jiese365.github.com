function body_load() {
    // 
    frameLoadSub("showWindow","https://jiese365.github.io/zouxiangguangming");
   //frameLoadSub("showWindow","https://fosss.org/book/Haitao/jieyin.html");
    changeFrameHeight("showWindow",75);

    
}

function loadJson() {
    // create left link 
    $.getJSON("./link.json", function (data){
      
        // var left_menu = document.getElementById("content_menu");
         var $left_menu = $("#content_menu");
         $left_menu.empty();
         var strhtml = "<ul>";
         $.each(data,function (infoindex,info) {
            //  console.log(info['url']);
            //  console.log(" ");
            //  console.log(info['name']);


             strhtml += "<li><a href='#' onclick='";
             strhtml += "frameLoadSub2("
             strhtml +='"showWindow",';
             strhtml +='"';
             strhtml += info["url"];
             strhtml +='"';
             strhtml +=",75)'>";    
             strhtml +=  info["name"] + "</a></li>";
             
         });
         strhtml +="</ul>";
         $left_menu.html(strhtml);
     });
}
/*iframe高度自适应，参考自：https://www.cnblogs.com/rogge7/p/7762052.html*/
function changeFrameHeight(frameId,offsetHeight){
    var ifm= document.getElementById(frameId); 
    if(ifm)
        ifm.height=document.documentElement.clientHeight-offsetHeight;
}

function frameLoadSub(frameid,file) {
    var frame = document.getElementById(frameid);
    frame.src=file;
}


function frameLoadSub2(frameid,file,offsetHeight) {
    var frame = document.getElementById(frameid);
    changeFrameHeight(frameid,offsetHeight);
    frame.src=file;
}