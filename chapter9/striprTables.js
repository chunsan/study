function striprTables(){
	if (!document.getElementsByTagName) return false;
var tables=document.getElementsByTagName("table");
var odd,rows;
for(var i=0;i<tables.length;i++){
  odd=false;
  rows=tables[i].getElementsByTagName("tr");
  for (j=0;j<rows.length;j++){
    if(odd==true){
      addClass(rows[j],"odd");
      odd=false;
    } else{
      odd=true;
    }
  }
}
}
  function addClass(element,value){
    if(!element.className){
      element.className=value;
    }else{
      element.className+=" ";
      element.className+=value;
    }
  }
addLoadEvent(striprTables);