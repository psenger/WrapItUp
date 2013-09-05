WrapItUp
==================

![Build Status](https://travis-ci.org/psenger/WrapItUp.png "Build Status" )

A Jquery plugin designed to wrap each letter ( the result of inner text ) with divs or any other tag and specified attributes.

Given some html like this..<br/>
&lt;div id='target'&gt;Lorem ipsum&lt;/div&gt;

doing this..<br/>
$('#target').WrapItUp('foo', 'goo');

will produce this...<br/>
&lt;div id='target'&gt;&lt;div class='foo goo'&gt;L&lt;/div&gt;&lt;div class='foo goo'&gt;o&lt;/div&gt;&lt;div class='foo goo'&gt;r&lt;/div&gt;&lt;div class='foo goo'&gt;e&lt;/div&gt;&lt;div class='foo goo'&gt;m&lt;/div&gt;&lt;div class='foo goo'&gt;&nbsp;&lt;/div&gt;&lt;div class='foo goo'&gt;i&lt;/div&gt;&lt;div class='foo goo'&gt;p&lt;/div&gt;&lt;div class='foo goo'&gt;s&lt;/div&gt;&lt;div class='foo goo'&gt;u&lt;/div&gt;&lt;div class='foo goo'&gt;m&lt;/div&gt;&lt;/div&gt;

You might be asking why would you want to do this. I simply needed to keep my content SEO friendly while using css3 animation on a String of text.
