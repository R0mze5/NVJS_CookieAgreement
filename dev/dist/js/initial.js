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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbml0aWFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuXG5pZighKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSsnX2Nvb2tpZUFncmVlbWVudCcpKSl7XG5cdHNob3dDb29raWVBZ3JlZW1lbnQoKTtcbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZV9hZ3JlZW1lbnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG5cdGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSsnX2Nvb2tpZUFncmVlbWVudCcpKXtcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUrJ19jb29raWVBZ3JlZW1lbnQnKTtcblx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdH1cbn0pXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKiogLi9zZXJ2aWNlcyBmdW5jdGlvbnMgKioqKioqKioqKioqKioqKioqKioqKioqICovIl0sImZpbGUiOiJpbml0aWFsLmpzIn0=
