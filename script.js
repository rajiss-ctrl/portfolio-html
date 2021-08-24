let toggle = document.querySelector('.hambugger');
let close = document.querySelector('.close');
let menu = document.querySelector('.menu'); 

toggle.addEventListener('click', function(){
	let activ = document.querySelector('.nav-menu');
	if(activ.style.display === 'block'){
		activ.style.display ='none'
			menu.style.display='block'
			close.style.display='none'		
	}else{
		activ.style.display ='block'
		close.style.display='block'
		menu.style.display='none'
}

})
