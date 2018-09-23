let button = document.querySelector(".btn-yellow");
let art = document.querySelector(".old");
let i = 0;

button.addEventListener("click",function(){
	
	if (i===0) {
		art.style.display = "flex";
		button.textContent = "Less Articles";
		i = 1;
	} else {
		art.style.display = "none";
		button.textContent = "More Articles";
		i = 0;
	}
	
})

function Calendar(id, year, month) {
				var Dlast = new Date(year,month+1,0).getDate(),
   				D = new Date(year,month,Dlast),
    			DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
    			DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
    			calendar = '<tr>',
    			month=["January","February","March","April","May","June","July","August","September","October","November","December"];
				if (DNfirst != 0) {
  				for(let  i = 1; i < DNfirst; i++) calendar += '<td>';
				}else{
  				for(let  i = 0; i < 6; i++) calendar += '<td>';
				}
				for(let  i = 1; i <= Dlast; i++) {
  				if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
    			calendar += '<td class="today">' + i;
  				}else{
    			calendar += '<td>' + i;
  				}
  				if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
    			calendar += '<tr>';
  				}
				}
				for(let  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
				document.querySelector('#'+id+' tbody').innerHTML = calendar;
				document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
				document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
				document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
				if (document.querySelectorAll('#'+id+' tbody tr').length < 6) { 
    			document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
				}
				}
				Calendar("calendar", new Date().getFullYear(), new Date().getMonth());
			
				document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
  				Calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month)-1);
				}
		
				document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
  				Calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month)+1);
				}