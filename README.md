WrapItUp 
==================
Version 
2.0.0

[![Build Status](https://travis-ci.org/psenger/WrapItUp.png?branch=master)](https://travis-ci.org/psenger/WrapItUp)

Tested with jQuery: '1.10.2', '1.9.1', '1.8.3', '1.7.2', '1.6.4', '1.5.2', '1.4.4'

> WrapItUp is a Jquery plugin designed to wrap each letter ( the result of inner text ) and or word ( as captured by a regular expression via word boundary ) with divs or any other tag with specified attributes.

Sample
-----------

Given some html like this..<br/>

`<div id='target'>Lorem ipsum</div>`


doing this JQuery...

`$('#target').wrapItUp('foo', 'goo');`

will produce this...

```HTML
	<div id="target">
		<div class="foo goo">L</div>
		<div class="foo goo">o</div>
		<div class="foo goo">r</div>
		<div class="foo goo">e</div>
		<div class="foo goo">m</div>
		<div class="foo goo"> </div>
		<div class="foo goo">i</div>
		<div class="foo goo">p</div>
		<div class="foo goo">s</div>
		<div class="foo goo">u</div>
		<div class="foo goo">m</div>
	</div>
```

Why
-----------

You might be asking why would you want to do this?! I would suggest you look at this [example] first to get an idea.

I simply needed to keep my content SEO friendly, capable of degrading gracefully, and easy to change the content( not cluttered with tags ). All of this while using css3 animation on a String of text or simple javascript animation.

Web crawlers like Google, don’t run JavaScript and rank pages many things but one of the calculations is based on a scan of consecutive text in HTML. Adhering to DRY, I decided to create a plugin and stop repeating myself. If you use [modernizr] to identify the capabilities of the client you can use it as part of the jQuery selector. For example, you might want to know if the Browser supports CSS3, you can incorporate it in the selector after [modernizr] runs. In this example the class cssanimations is added by [modernizr] to the body tag. We can take advantage by using it in the jQuery selector.

I made this plugging to be compatible with javascript animation packages like extremely popular [GreenSock]. For example, If you wanted to make some text pop out, this is what the HTML would look like before using wrapItUp.

&lt;body class=’cssanimations’ &gt;
....
....
&lt;div id=”pop-out”&gt;Pop Out!&lt;/div&gt;
....
....
&lt;/body&gt;

Mixing in the modernizr introduced css class in the body and the tag selector, I call wrap it up like this.

``` 
<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.11.5/TweenMax.min.js"></script>
TweenLite.to( $(‘.cssanimations #pop-out’).wrapItUp('pop'), 2, {scale:1.5 } );
```

This is what it would look like after wrapItUp

&lt;body class="cssanimations"&gt;<br/>
&lt;div id="pop-out"&gt;<br/>
<span style="color:blue">&lt;<span style="color:green">div</span> class="<span style="color:red">pop</span>"&gt;</span>
P<span style="color:blue">&lt;/<span><span style="color:green">div</span><span style="color:blue">&gt;</span>
<span style="color:blue">&lt;<span style="color:green">div</span> class="<span style="color:red">pop</span>"&gt;</span>o<span style="color:blue">&lt;/<span><span style="color:green">div</span><span style="color:blue">&gt;<span><span style="color:blue">&lt;<span style="color:green">div</span> class="<span style="color:red">pop</span>"&gt;</span>p<span style="color:blue">&lt;/<span><span style="color:green">div</span><span style="color:blue">&gt;<span><span style="color:blue">&lt;<span style="color:green">div</span> class="<span style="color:red">pop</span>"&gt;</span>&nbsp;<span style="color:blue">&lt;/<span><span style="color:green">div</span><span style="color:blue">&gt;<span><span style="color:blue">&lt;<span style="color:green">div</span> class="<span style="color:red">pop</span>"&gt;</span>O<span style="color:blue">&lt;/<span><span style="color:green">div</span><span style="color:blue">&gt;<span><span style="color:blue">&lt;<span style="color:green">div</span> class="<span style="color:red">pop</span>"&gt;</span>u<span style="color:blue">&lt;/<span><span style="color:green">div</span><span style="color:blue">&gt;<span><span style="color:blue">&lt;<span style="color:green">div</span> class="<span style="color:red">pop</span>"&gt;</span>t<span style="color:blue">&lt;/<span><span style="color:green">div</span><span style="color:blue">&gt;<span><span style="color:blue">&lt;<span style="color:green">div</span> class="<span style="color:red">pop</span>"&gt;</span>!<span style="color:blue">&lt;/<span><span style="color:green">div</span><span style="color:blue">&gt;<span>
<br/>
&lt;/div&gt;
<br/>
&lt;/body&gt;


## Parameters ##

This is just an overview, for a better understand of the parameters, review the docs. 

wrapItUp() 

  * wraps each letter with a div, this is kind of useless because there are no classes on the divs.

wrapItUp(String) 

  * wraps each letter with a div and each div will have the class specified in the string

wrapItUp(String... )

  * wraps each letter with a div and each div has the classes specified in the var args strings
  
wrapItUp( [ String... ] )

  * wraps each letter with a div and each div has the classes specified in the var args strings

wrapItUp(Object) - wraps each word or character in what ever is specified in the object.

* Object :
  * characterTag - String - the tag, default is div
  * wordTag - String - the tag, default is div
  * characterClassNames - String[] - css classes used for the characters that will be wrapped in a div
  * wordClassNames - String[] - css classes used for the words ( and character divs ) that will be wrapped in a div
  * tagDecorator - function( i, v ) - the callback function that creates the attributes of the tag
  * innerDecorator - function ( i, v ) - the callback function that decorators each character.
    
  
## Methods ##

destroy()
	- unwraps the content, restoring it back to its original state.

[example]: https://raw.github.com/psenger/WrapItUp/master/example.html
[modernizr]: http://modernizr.com/
[GreenSock]: http://www.greensock.com/