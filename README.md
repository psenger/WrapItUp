WrapItUp 
==================
Version 
1.0.0

[![Build Status](https://travis-ci.org/psenger/WrapItUp.png?branch=master)](https://travis-ci.org/psenger/WrapItUp)

Tested with jQuery: '1.10.2', '1.9.1', '1.8.3', '1.7.2', '1.6.4', '1.5.2', '1.4.4'

> WrapItUp is a Jquery plugin designed to wrap each letter ( the result of inner text ) with divs or any other tag with specified attributes.

Sample
-----------

Given some html like this..<br/>
&lt;div id='target'&gt;Lorem ipsum&lt;/div&gt;

doing this..<br/>
```
$('#target').wrapItUp('foo', 'goo');
```

will produce this...<br/>
&lt;div id='target'&gt;&lt;div class='foo goo'&gt;L&lt;/div&gt;&lt;div class='foo goo'&gt;o&lt;/div&gt;&lt;div class='foo goo'&gt;r&lt;/div&gt;&lt;div class='foo goo'&gt;e&lt;/div&gt;&lt;div class='foo goo'&gt;m&lt;/div&gt;&lt;div class='foo goo'&gt;&nbsp;&lt;/div&gt;&lt;div class='foo goo'&gt;i&lt;/div&gt;&lt;div class='foo goo'&gt;p&lt;/div&gt;&lt;div class='foo goo'&gt;s&lt;/div&gt;&lt;div class='foo goo'&gt;u&lt;/div&gt;&lt;div class='foo goo'&gt;m&lt;/div&gt;&lt;/div&gt;

Why?!
-----------

> You might be asking why would you want to do this?! I simply needed to keep my content SEO friendly and easy to change ( not cluttered with tags ) while using css3 animation on a String of text. Web crawlers like Google, don’t run JavaScript and rank pages based on a scan of consecutive text in HTML. Adhering to DRY, I decided to create a plugin and stop repeating myself. If you use modernizr (http://modernizr.com/) to identify the capabilities of the client you can use it as part of the jQuery selector.  For example, you might want to know if the Browser supports CSS3, you can incorporate it in the selector after Modernizr runs. In this example the class cssanimations is added by modernizr to the body tag. We can take advantage by using it in the jQuery selector. 


This is what the HTML would look like before the wrapItUp.

&lt;body class=’cssanimations’ &gt;
....
....
&lt;div id=”pop-out”&gt;Pop Out!&lt;/div&gt;
....
....
&lt;/body&gt;

Mixing in the modernizr introduced css class in the body and the tag selector, I call wrap it up like this.

```
$(‘.cssanimations #pop-out’).wrapItUp('pop');
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

wrapItUp()
  - wraps each letter with a div

wrapItUp(String)
  - wraps each letter with a div and each div has the class specified in the string

wrapItUp(String... )
  - wraps each letter with a div and each div has the classes specified in the var args strings

wrapItUp(Object)
  - wraps each what ever is specificed in the object.
  - Object :
    - tag - String - the tag, default is div
    - className - String[] - css classes
    - tagDecorator - function( i, v ) - the callback function that creates the attributes of the tag
    - innerDecorator - function ( i, v ) - the callback function that decorators each character.

  
## Methods ##

destroy()
	- unwraps the content, restoring it back to its original state.
