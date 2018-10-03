function showCookieAgreement(){

    let cookieAgreement = createHTML();
    document.body.appendChild(cookieAgreement);

    let styleSheet = createStyleSheet();
    document.body.append(styleSheet);


    let container = document.querySelector('.cookie_agreement');
    let agreementButton;

    if(container){
        container.classList.add('shown');
        agreementButton = container.querySelector('.button');
        agreementButton.addEventListener('click', setLocalStorageItem)
    }

    function setLocalStorageItem(){
        localStorage.setItem(window.location.hostname+'_cookieAgreement', true);
        agreementButton.removeEventListener('click', setLocalStorageItem);
        container.classList.remove('shown');
        setTimeout(() => {
            container.parentElement.removeChild(container);
        },450);
    } 

    function createHTML(){
        let cookieAgreement = document.createElement('div');
        cookieAgreement.className = 'cookie_agreement';
        cookieAgreement.innerHTML = `
        <div class="wrapper">
            <div class="cookie_agreement__container">
            <div class="cookie_agreement__block">Мы используем cookie. Это нужно для того, чтобы мы могли сделать сайт более удобным для Вас. Окно закроется после того, как вы нажмете нижерасположенную кнопку "согласен". Нажимая на кнопку, Вы даете согласие на <a class="cookie_agreement__link agreement__link" href="">обработку своих персональных данных</a>, соглашаетесь с <a class="cookie_agreement__link confidential__link" href="">политикой конфиденциальности</a> и <a class="cookie_agreement__link cookies__link" href="">политикой в отношении файлов cookie и файлов, хранящихся в локальном хранилище браузера (local storage)</a>.</div>
            <div class="button white_btn">Согласен</div>
            </div>
        </div>
        `;
        
        return cookieAgreement;

    }


    function createStyleSheet(){
        let styleSheet = document.createElement('style');
        let stylesInner = `
            .cookie_agreement {
                position: fixed;
                left: 0;
                right: 0;
                bottom: -100%;
                min-height: 120px;
                padding: 30px 30px 40px;
                z-index: 101;
                -webkit-transition: bottom 450ms ease-in-out;
                -o-transition: bottom 450ms ease-in-out;
                transition: bottom 450ms ease-in-out;
            }
            .cookie_agreement::after {
                display: block;
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
                background:  var(--cookieAgeement-backround_color, #202124);
            }
            .cookie_agreement__container {
                position: relative;
                z-index: 31;
            }
            .cookie_agreement__block {
                color: var(--cookieAgeement-text_color, #ffffff);
                font-size: 16px;
                margin-bottom: 20px;
                line-height: 1.4;
            }
            .cookie_agreement__link,
            .cookie_agreement__link.confidential__link {
                font-size: inherit;
                -webkit-text-decoration: underline solid;
                        text-decoration: underline solid;
                color: inherit;
            }
            .cookie_agreement.shown {
                bottom: 0;
            }
            
            .cookie_agreement .button {
                margin-left: 0;
                font-size: 14px;
            }
        `;

        styleSheet.innerHTML = stylesInner;
        return styleSheet;
    }

    return true;

}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJOVkpTX0Nvb2tpZUFncmVlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzaG93Q29va2llQWdyZWVtZW50KCl7XG5cbiAgICBsZXQgY29va2llQWdyZWVtZW50ID0gY3JlYXRlSFRNTCgpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29va2llQWdyZWVtZW50KTtcblxuICAgIGxldCBzdHlsZVNoZWV0ID0gY3JlYXRlU3R5bGVTaGVldCgpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHN0eWxlU2hlZXQpO1xuXG5cbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvb2tpZV9hZ3JlZW1lbnQnKTtcbiAgICBsZXQgYWdyZWVtZW50QnV0dG9uO1xuXG4gICAgaWYoY29udGFpbmVyKXtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Nob3duJyk7XG4gICAgICAgIGFncmVlbWVudEJ1dHRvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uJyk7XG4gICAgICAgIGFncmVlbWVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNldExvY2FsU3RvcmFnZUl0ZW0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0TG9jYWxTdG9yYWdlSXRlbSgpe1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUrJ19jb29raWVBZ3JlZW1lbnQnLCB0cnVlKTtcbiAgICAgICAgYWdyZWVtZW50QnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2V0TG9jYWxTdG9yYWdlSXRlbSk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93bicpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIH0sNDUwKTtcbiAgICB9IFxuXG4gICAgZnVuY3Rpb24gY3JlYXRlSFRNTCgpe1xuICAgICAgICBsZXQgY29va2llQWdyZWVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvb2tpZUFncmVlbWVudC5jbGFzc05hbWUgPSAnY29va2llX2FncmVlbWVudCc7XG4gICAgICAgIGNvb2tpZUFncmVlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29va2llX2FncmVlbWVudF9fY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29va2llX2FncmVlbWVudF9fYmxvY2tcIj7QnNGLINC40YHQv9C+0LvRjNC30YPQtdC8IGNvb2tpZS4g0K3RgtC+INC90YPQttC90L4g0LTQu9GPINGC0L7Qs9C+LCDRh9GC0L7QsdGLINC80Ysg0LzQvtCz0LvQuCDRgdC00LXQu9Cw0YLRjCDRgdCw0LnRgiDQsdC+0LvQtdC1INGD0LTQvtCx0L3Ri9C8INC00LvRjyDQktCw0YEuINCe0LrQvdC+INC30LDQutGA0L7QtdGC0YHRjyDQv9C+0YHQu9C1INGC0L7Qs9C+LCDQutCw0Log0LLRiyDQvdCw0LbQvNC10YLQtSDQvdC40LbQtdGA0LDRgdC/0L7Qu9C+0LbQtdC90L3Rg9GOINC60L3QvtC/0LrRgyBcItGB0L7Qs9C70LDRgdC10L1cIi4g0J3QsNC20LjQvNCw0Y8g0L3QsCDQutC90L7Qv9C60YMsINCS0Ysg0LTQsNC10YLQtSDRgdC+0LPQu9Cw0YHQuNC1INC90LAgPGEgY2xhc3M9XCJjb29raWVfYWdyZWVtZW50X19saW5rIGFncmVlbWVudF9fbGlua1wiIGhyZWY9XCJcIj7QvtCx0YDQsNCx0L7RgtC60YMg0YHQstC+0LjRhSDQv9C10YDRgdC+0L3QsNC70YzQvdGL0YUg0LTQsNC90L3Ri9GFPC9hPiwg0YHQvtCz0LvQsNGI0LDQtdGC0LXRgdGMINGBIDxhIGNsYXNzPVwiY29va2llX2FncmVlbWVudF9fbGluayBjb25maWRlbnRpYWxfX2xpbmtcIiBocmVmPVwiXCI+0L/QvtC70LjRgtC40LrQvtC5INC60L7QvdGE0LjQtNC10L3RhtC40LDQu9GM0L3QvtGB0YLQuDwvYT4g0LggPGEgY2xhc3M9XCJjb29raWVfYWdyZWVtZW50X19saW5rIGNvb2tpZXNfX2xpbmtcIiBocmVmPVwiXCI+0L/QvtC70LjRgtC40LrQvtC5INCyINC+0YLQvdC+0YjQtdC90LjQuCDRhNCw0LnQu9C+0LIgY29va2llINC4INGE0LDQudC70L7Qsiwg0YXRgNCw0L3Rj9GJ0LjRhdGB0Y8g0LIg0LvQvtC60LDQu9GM0L3QvtC8INGF0YDQsNC90LjQu9C40YnQtSDQsdGA0LDRg9C30LXRgNCwIChsb2NhbCBzdG9yYWdlKTwvYT4uPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uIHdoaXRlX2J0blwiPtCh0L7Qs9C70LDRgdC10L08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjb29raWVBZ3JlZW1lbnQ7XG5cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVN0eWxlU2hlZXQoKXtcbiAgICAgICAgbGV0IHN0eWxlU2hlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBsZXQgc3R5bGVzSW5uZXIgPSBgXG4gICAgICAgICAgICAuY29va2llX2FncmVlbWVudCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMTAwJTtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDMwcHggNDBweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDE7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3R0b20gNDUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYm90dG9tIDQ1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJvdHRvbSA0NTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb29raWVfYWdyZWVtZW50OjphZnRlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIHZhcigtLWNvb2tpZUFnZWVtZW50LWJhY2tyb3VuZF9jb2xvciwgIzIwMjEyNCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29va2llX2FncmVlbWVudF9fY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMzE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29va2llX2FncmVlbWVudF9fYmxvY2sge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb29raWVBZ2VlbWVudC10ZXh0X2NvbG9yLCAjZmZmZmZmKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvb2tpZV9hZ3JlZW1lbnRfX2xpbmssXG4gICAgICAgICAgICAuY29va2llX2FncmVlbWVudF9fbGluay5jb25maWRlbnRpYWxfX2xpbmsge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHNvbGlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgc29saWQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29va2llX2FncmVlbWVudC5zaG93biB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuY29va2llX2FncmVlbWVudCAuYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIGA7XG5cbiAgICAgICAgc3R5bGVTaGVldC5pbm5lckhUTUwgPSBzdHlsZXNJbm5lcjtcbiAgICAgICAgcmV0dXJuIHN0eWxlU2hlZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG5cbn1cbiJdLCJmaWxlIjoiTlZKU19Db29raWVBZ3JlZW1lbnQuanMifQ==
