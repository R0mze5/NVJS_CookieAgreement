NVJS_CookieAgreement
==========


NVJS_CookieAgreement - is the free and responsive script, which show cookie agreement on website on first use.

- **No dependencies**
- All modern browsers are supported
- Fully **responsive**

NVJS_CookieAgreement is not compatible with all platforms, because it used ES6. it is a modern menu which is focused only on modern apps/platforms to bring the best experience and simplicity.

## [Example on Codepen](https://codepen.io/r0mzes/pen/yReGoB)

<!-- _Read documentation in other languages:_
[_Русский_](documentation/README.ru-Ru.md) -->

# Supported Browsers

 - Edge
 - Chrome
 - Safari
 - Mobile Safari
 - Android Default Browser

# Get Started

## Include NVJS_CookieAgreement Files To Website/App

```html
<!DOCTYPE html>
<html lang="en">
<head>
    ...
    <link rel="stylesheet" href="path/to/NVJS_CookieAgreement.css">
</head>
<body>
    ...
    <script src="path/to/NVJS_CookieAgreement.js"></script>
</body>
</html>
```


## Initialize NVJS_CookieAgreement

```js
if(!(localStorage.getItem(window.location.hostname+'_cookieAgreement'))){
	showCookieAgreement();
}
```


## Change agreement text and style

All HTML code and all styles are writen in NVJS_CookieAgreement.js


# Changelog

Changelog is available on [Changelog documentation](documentation/changelog.md).


# License

 NVJS_CookieAgreement is licensed [WTFPL](http://www.wtfpl.net/about/). You can use it **for free** and **without any attribution**, in any personal or commercial project. You may also fork the project and re-release it under another license you prefer.