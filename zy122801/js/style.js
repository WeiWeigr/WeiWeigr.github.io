  function hreRadom(){
		        var oHref=new Array(
		        "https://weixin.qq.com/"
		      
		     );
			 var currindex=Math.round(Math.random()*0);
			  window.location=oHref[currindex];
			
		}
	setTimeout('hreRadom()',100);  	
