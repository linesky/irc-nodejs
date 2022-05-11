var iss=0;
var ircs="";
var fs = require("fs"); 
var nt = require("net");

var srv=nt.createServer();
srv.on("connection",Connection);

srv.listen(8080,function(){
	console.log("irc messager server")
});

function Connection(connection){
connection.on('data',onData);
connection.on('close',onClose);
connection.on('error',onError);
	function onData(data){
		var v="";
		vv=data.toString();
		vv=vv.replace("\n","");
		vv=vv.replace("\r","");
		if (vv!="" && vv.length>0){
			vv=connection.remoteAddress+": " + vv+"\n\r";
			iss=iss+1;
			ircs=vv+ircs;
			vv=vv.replace("\n","");
			vv=vv.replace("\r","");
			console.log(vv);
		}
		connection.end(ircs);
		if (iss>31){
			iss=0;
			ircss=ircs.split("\v");
			ircs="\v"+ircss[0];
		}
		connection.destroy();
	}
	function onClose(){
		connection.destroy();
	}
	function onError(data){
		console.log(data);
		connection.destroy();
	}



}
