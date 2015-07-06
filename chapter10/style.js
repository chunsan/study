function styleheader(){
if (!document.getElementsByTagName) return false;
var header=document.getElementsByTagName("h1");
var elem;
for(var i=0;i<header.length;i++){
  elem=getNextElement(header[i].nextSibling);
  addClass(elem,"intro");
}
}
function getNextElement(node){
  if(node.nodeType==1){
    return node;
  }
  if(node.nextSibling){
    return getNextElement(node.nextSibling);
  }
  return null;
  }
  function addClass(element,value){
    if(!element.className){
      element.className=value;
    }else{
      element.className+=" ";
      element.className+=value;
    }
  }
addLoadEvent(styleheader);