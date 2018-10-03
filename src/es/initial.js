'use strict';


if(!(localStorage.getItem(window.location.hostname+'_cookieAgreement'))){
	showCookieAgreement();
}

document.querySelector('.remove_agreement').addEventListener('click', ()=>{
	if(localStorage.getItem(window.location.hostname+'_cookieAgreement')){
		localStorage.removeItem(window.location.hostname+'_cookieAgreement');
		window.location.reload();
	}
})
/* ************************ ./services functions ************************ */