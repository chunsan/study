function displayAccesskeys(){
if (!document.getElementsByTagName) return false;
  if (!document.createElement) return false;
  if (!document.createTextNode) return false;
  //get all the links
  var links=document.getElementsByTagName("a");
  //creat an array to save links
  var akeys=new Array();
  //loop through all the links
  for(var i=0;i<links.length;i++){
    var current_links=links[i];
    //if no accesskey continue
    if(!current_links.getAttribute("accesskey")) continue;
    //get the value of accesskey
    var key=current_links.getAttribute("accesskey");
    //get the link text
    var text=current_links.lastChild.nodeValue;
    akeys[key]=text;
  }
  //create a list
  var list=document.createElement("ul");
  for(key in akeys){
    var text=akeys[key];
    var str=key +":"+text;
    var li=document.createElement("li");
    var li_text=document.createTextNode(str);
    li.appendChild(li_text);
    list.appendChild(li);
  }
  //create title
   var header=document.createElement("h3");
   var header_text=document.createTextNode("Accesskey");
   header.appendChild(header_text);
   document.body.appendChild(header);
   document.body.appendChild(list);
}
addLoadEvent(displayAccesskeys);