var iss=0;
var ircs="";
var fs = require("fs"); 
var nt = require("net");

var srv=nt.createServer();
srv.on("connection",Connection);

srv.listen(8080,function(){
	console.log("messager server")
});

function Connection(connection){
connection.on('data',onData);
connection.on('close',onClose);
connection.on('error',onError);
	function onData(data){
		var v="";
		iss=iss+1;
		vv=data.toString();
		vv=connection.remoteAddress+": " + vv;
		ircs=vv+ircs
		connection.end(ircs);
		if (iss>80){
			iss=0;
			ircss=ircs.split("\v");
			ircs=ircss[0];
			ircs="\v";
			
		}
		console.log(vv);
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
