function displayCitations(){
	if (!document.getElementsByTagName) return false;
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	//get all citations
	var quotes=document.getElementsByTagName("blockquote");
	//loop through all the citations
	for (var i=0;i<quotes.length;i++){
		//if no cite continue
		if (!quotes[i].getAttribute("cite")) continue;
		//store the cite attribute
		var url=quotes[i].getAttribute("cite");
       //get all element nodes
       var quoteChildren=quotes[i].getElementsByTagName("*");
       //get the last element node
       var elem=quoteChildren[quoteChildren.length - 1];
       //create links
       var link=document.createElement("a");
       var link_text=document.createTextNode("source");
       link.appendChild(link_text);
       link.setAttribute("href",url);
        var superscript=document.createElement("sup");
        superscript.appendChild(link);
        //set link to the last element
        elem.appendChild(superscript);
	}
}
addLoadEvent(displayCitations);