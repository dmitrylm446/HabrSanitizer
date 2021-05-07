# [HabrSanitizer](https://chrome.google.com/webstore/detail/habrosanitizer/gnbmgdpmmddeegooghfhjlchocllcgpc)

![https://img.shields.io/chrome-web-store/rating/gnbmgdpmmddeegooghfhjlchocllcgpc?label=Chrome%20Rating](https://img.shields.io/chrome-web-store/rating/gnbmgdpmmddeegooghfhjlchocllcgpc?label=Chrome%20Rating)
![https://img.shields.io/amo/rating/habrosanitizer?label=Mozilla%20Rating](https://img.shields.io/amo/rating/habrosanitizer?label=Mozilla%20Rating)

Home for the Chrome and Firefox extension to sanitize Habr.com from graphomaniac authors. No external code, no tracking, 100% open source. [Free on Chrome Web Store](https://chrome.google.com/webstore/detail/habrosanitizer/gnbmgdpmmddeegooghfhjlchocllcgpc) or [FireFox Addons](https://addons.mozilla.org/firefox/addon/habrosanitizer/)

![Settings page](https://raw.githubusercontent.com/Drag13/HabrSanitizer/master/docs/example.jpg)

## Install extension

* To install the HabrSanitizer from Chrome Extensions Store - use this link: [Habrosanitizer](https://chrome.google.com/webstore/detail/habrosanitizer/gnbmgdpmmddeegooghfhjlchocllcgpc)
* To install the HabrSanitizer from FireFox Addons - use this link: [Habrosanitizer](https://addons.mozilla.org/firefox/addon/habrosanitizer/)

Or, follow next steps to be 100% sure that everything is safe:

* Clone https://github.com/Drag13/HabrSanitizer
* Open extensions tab:
  * Chrome: [chrome://extensions/](chrome://extensions/)
  * Firefox: [about:addons](about:addons). You need [Firefox Developer Edition](https://www.mozilla.org/firefox/developer/) to install unsigned addons.
* Enable developer mode toggle on the top-right corner
* Click Load unpacked on the top-left corner and select SRC folder from the repo

**That's all!**

## Setup

To make it work you need to set list of authors/companies/hubs you want to ban:

* Right click on the extension button and click on the **Options** option
* Use options page to save your personal ban list

If you don't see extension icon on the toolbar, you can go to the [chrome://extensions/](chrome://extensions/), click "detials" button and then click "Extension options".

## Share

To share the config, make a pull request to this repo. It should contain:

* Your name as the name of the folder
* Readme.md with short description
* habrasnitizer.json generated by the extension

Check `configs/` folder for the example

## Install as a code

To install HabroSanitizer you need to instal [Node.JS](https://nodejs.org/en/) first.

Then follow next steps:

* Clone [HabroSanitizer repo](https://github.com/Drag13/HabrSanitizer)
* Move the cloned folder
* Install dependencies using `npm ci` command

## Build code

* Build HabroSanitizer with `npm run build` command

## Tests

To run tests use `npm test` command

Happy reading!

With love by [Drag13](https://drag13.io)
