# JavaScript30 - CSS Variables

This is a JavaScript practice with JavaScript30 by Wes Bos without any frameworks, no compilers, no boilerplate, and no libraries. (https://javascript30.com/)



### Screenshot

![](./screenshot.png)



### Links

- Solution URL: https://github.com/Rocky-MPN/Frontend/tree/main/JavaScript30/CSS-Variables
- Live Site URL: https://rocky-mpn.github.io/CSS-Variables/

### Lessons

```data-``` attribute, ```:root```, CSS Variables definition ```var(--xxx)```, ```filter: blur()```, ```change``` event and ```mousemove``` event

```dataset``` property allows to custom data attributes like ```data-xxx``` on the element, either in HTML or in the DOM. It's a map of DOMString, one entry for each custom data attribute.

```:root``` selector matches the document's root element is always the html element and it's also where we declare the variable for the base element in HTML.

once we declare CSS Variables, then we can add it to our specific elements, like ```img below```, check how to declare it [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).

CSS Variable declare syntax is ```--```, just like ```$``` in SASS.

```
:root {
  --spacing: 10px;
}

img {
  padding: var(--spacing);
}
```
CSS ```filter``` provides such as ```blur```, ```bightness``` and so on, take a look at it [here](https://developer.mozilla.org/en-US/docs/Web/CSS/filter_).

NodeList v.s. Array : NodeList is NOT an Array. You can open the proto in dev tool and see its methods, there are forEach(), keys()..., and Array's prototype has map(), pop()...etc.

#### Handling suffix with dataset
use ```dataset``` to deal with suffix ```px``` by adding ```data-sizing: px``` as an attribute on input element.

```<input type="range" name="blur" min="0" max="25" value="10" data-sizing="px">```
and the get the suffix by ```dataset.sizing``` via JS

```const suffix = this.dataset.sizing || '';```
and don't forget a condition with ```|| ''``` for ```<input type=color>``` which has no ```px```.

#### Changing CSS property via JS
```document.documentElement``` is the root element in JS, so we can change the global CSS variables by JS is just ```setProperty``` to ```style``` like so:

```document.documentElement.style.setProperty('--base', '#000');```
### Built with

- HTML
- CSS
- JS

### Acknowledgments
https://github.com/amelieyeh Step by step guide with key information explained.

### Author
- Twitter - [@Rocky_MPN](https://www.twitter.com/Rocky_mpn)
