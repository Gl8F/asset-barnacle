function fireApi(){!function(e,n){let t=new XMLHttpRequest;t.open("POST",e),t.setRequestHeader("Content-Type","application/json"),t.send(JSON.stringify(n))}("https://bosko.ml/api/clicked",{referer:window.location.href,destination:document.getElementById("download-link").innerHTML})}
