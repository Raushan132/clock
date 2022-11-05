var start=setInterval(clock,1000);
		var hr=12;var min=58;var sec=0;
		var hr_box=document.getElementById("hr");
		var min_box=document.getElementById("min");
		var sec_box=document.getElementById("sec");
		function clock(){
			
			setSecond();
			setMin();
			setHour();
			setTimeVal(hr,min,sec);
 			
		}
		function setSecond(){
			sec+=1;
		
			if(sec>59){
				min+=1;
				sec=0;
			}
		}
		function setMin(){
			if(min>59){
				hr+=1;
				min=0;
			}
		}
		function setHour(){
			if(hr>12)	hr=1;
		}
		function setTimeVal(hr,min,sec) {
			// body...
			sec_str=(sec>=10)?sec:"0"+sec;
			min_str=(min>=10)?min:"0"+min;
			hr_str=(hr>=10)?hr:"0"+hr;
			hr_box.innerText=hr_str;
			min_box.innerText=min_str;
			sec_box.innerText=sec_str;
		}