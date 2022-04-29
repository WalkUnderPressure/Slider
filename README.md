# Simple slider created using HTML, CSS, JS.

To start working with the slider, you need to create a container **div** with an **id** and a **class**, as shown below:

```html
<div id="slider-container-one" class="slider-container"></div>
```

Function Slider takes input parrameters object **ISliderSettings**.

```js
ISliderSettings {
    items: Array<ISlide>,
    containerId: string,
    initSlideId: string,
    classNames: IClassNames,
}
```
* **items** - it's an array of object **ISlide** for show;
* **containerId** - it's container **div's** **id**, by default ***containerId = "slider-container-one"***;
* **initSlideId** - it's slide id which will be active on start, by default ***initSlideId equal first element***;
* **classNames** - it's object **IClassNames** with class names for elements styling. 

```js
ISlide {
    id: string,
    title: string,
    titleClassName: string,
    url: string,
    imgClassName: string,
}
```

* **id** - image id;
* **title** - image title;
* **titleClassName** - class for image title element styling;
* **url** - image URL;
* **imgClassName** - class for image element styling.

```js
IClassNames {
    slide: string,
    slideTitle: string,
    slideImage: string,
}
```  

* **slide** - class for slide element styling, by default **class="slide"**;
* **slideTitle** - class for slide title element styling, by default ***class="slide-title"***;
* **slideImage** - class for slide image element styling, by default ***class="slide-image"***;

***Important: After you'll add these class names you'll need to add CSS styles for those!***
