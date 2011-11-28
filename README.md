# jquery-patience

## Status

(27/11/2011) Not usable for now, the plugin it's in development. 
(28/11/2011) Yes! Now you can use it!

## Introduction

I was searching a jQuery plugin to show a "loading" div for ajax calls, and I didn't found anything.  So after that, I decided to create this plugin. 

It works out-of-the-box, this means that you don't need to add new stylesheets to the HTML, or add strange configurations.

## Requirements

- You must use jQuery (lastest, better)

- Only works with ajax calls

## How to use

It's simple!, add the plugin to the HTML, and in the HEAD section, add this:
    `<meta name="patience" content="true">`

And that's it!

Anyway, you can customize the loading div, instead of add the meta "patience", call $.patience with some options like:

* loading_image: path of the loading icon
* message: message that will be shown inside the div, something like "Loading..." or "Wait please..."
* height: height of the div
* width: width of the div

Or if you want to use your own div:
* div_loading: name of the div that you created by your own to be shown.

e.g.: 
    $.patience({message: "Wait please!",height:200,width:200});

## Author

[Rodrigo Ayala](http://twitter.com/RodrigoAyala)


