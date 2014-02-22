(function($) {
    /*
     ======== A Handy Little QUnit Reference ========
     http://api.qunitjs.com/

     Test methods:
     module(name, {[setup][ ,teardown]})
     test(name, callback)
     expect(numberOfAssertions)
     stop(increment)
     start(decrement)
     Test assertions:
     ok(value, [message])
     equal(actual, expected, [message])
     notEqual(actual, expected, [message])
     deepEqual(actual, expected, [message])
     notDeepEqual(actual, expected, [message])
     strictEqual(actual, expected, [message])
     notStrictEqual(actual, expected, [message])
     throws(block, [expected], [message])
     */

    test('Test counting divs - no classes',function(){
        expect(3);

        $('#qunit-fixture #nothing').wrapItUp();
        var len = $('#qunit-fixture #nothing').find('div').length;
        equal(len, 0, "0 divs found");

        $('#qunit-fixture #25').wrapItUp();
        var len = $('#qunit-fixture #25').find('div').length;
        equal(len, 25, "25 divs found");

        $('#qunit-fixture #hotmess').wrapItUp();
        var len = $('#qunit-fixture #hotmess').find('div').length;
        equal(len, 14, "14 divs found");

    });

    test('Test counting divs but using a complex config',function(){
        expect(6);

        $('#qunit-fixture #nothing').wrapItUp( { characterClassNames: [ 'foo', 'goo'] } );
        var len = $('#qunit-fixture #nothing div.foo').length;
        equal(len, 0, "0 divs found");
        var len = $('#qunit-fixture #nothing div.goo').length;
        equal(len, 0, "0 divs found");

        $('#qunit-fixture #25').wrapItUp( { characterClassNames: [ 'blaa', 'noo' ] } );
        var len = $('#qunit-fixture #25 div.blaa').length;
        equal(len, 25, "25 divs found for class blaa");
        var len = $('#qunit-fixture #25 div.noo').length;
        equal(len, 25, "25 divs found for class noo");

        $('#qunit-fixture #hotmess').wrapItUp( { characterClassNames: [ 'yoo', 'ioo' ] } );
        var len =$('#qunit-fixture #hotmess div.yoo').length;
        equal(len, 14, "14 divs found");
        var len =$('#qunit-fixture #hotmess div.ioo').length;
        equal(len, 14, "14 divs found");

    });

    test('Test counting divs but using css classes as vararg',function(){
        expect(6);

        $('#qunit-fixture #nothing').wrapItUp( 'foo', 'goo' );
        var len = $('#qunit-fixture #nothing div.foo').length;
        equal(len, 0, "0 divs found for div with class foo");
        var len = $('#qunit-fixture #nothing div.goo').length;
        equal(len, 0, "0 divs found for div with class goo");

        $('#qunit-fixture #25').wrapItUp( 'doo', 'noo' );
        var len = $('#qunit-fixture #25 .doo').length;
        equal(len, 25, "25 divs found for div with class doo");
        var len = $('#qunit-fixture #25 .noo').length;
        equal(len, 25, "25 divs found for div with class noo");

        $('#qunit-fixture #hotmess').wrapItUp( 'yoo', 'ioo' );
        var len = $('#qunit-fixture #hotmess .yoo').length;
        equal(len, 14, "14 divs found for div with class yoo");
        var len = $('#qunit-fixture #hotmess .ioo').length;
        equal(len, 14, "14 divs found for div with class ioo");

    });

    test('Test counting divs but using css classes as an array of strings',function(){
        expect(5);

        $('#qunit-fixture #nothing').wrapItUp( ['foo', 'goo'] );
        var len = $('#qunit-fixture #nothing').find('.foo.goo').length;
        equal(len, 0, "0 divs found");

        $('#qunit-fixture #25').wrapItUp( ['doo', 'noo'] );
        var len = $('#qunit-fixture #25 div.doo').length;
        equal(len, 25, "25 divs found");
        var len = $('#qunit-fixture #25 div.noo').length;
        equal(len, 25, "25 divs found");

        $('#qunit-fixture #hotmess').wrapItUp( ['yoo', 'ioo'] );
        var len = $('#qunit-fixture #hotmess div.yoo').length;
        equal(len, 14, "25 divs found");
        var len = $('#qunit-fixture #hotmess div.ioo').length;
        equal(len, 14, "25 divs found");

    });

    test('Test counting divs but using a tagDecorator',function(){
        expect(3);

        $('#qunit-fixture #nothing').wrapItUp( { characterClassNames: [ 'foo', 'goo'], tagDecorator:function(){ return "role='A'"; } } );
        var len = $('#qunit-fixture #nothing').find("[role|='A']").length;
        equal(len, 0, "0 divs found");

        $('#qunit-fixture #25').wrapItUp( { characterClassNames: [ 'doo', 'noo' ], tagDecorator:function(){ return "role='B'"; }  } );
        var len = $('#qunit-fixture #25').find("[role|='B']").length;
        equal(len, 25, "25 divs found");

        $('#qunit-fixture #hotmess').wrapItUp( { characterClassNames: [ 'yoo', 'ioo' ], tagDecorator:function(){ return "role='C'"; }  } );
        var len = $('#qunit-fixture #hotmess').find("[role|='C']").length;
        equal(len, 14, "14 divs found");

    });

    test('Test counting chars as a by product of innerDecorator',function(){
        expect(3);

        $('#qunit-fixture #nothing').wrapItUp( { characterClassNames: [ 'foo', 'goo'], innerDecorator:function(){ return "ZZ'"; } } );
        var len = $('#qunit-fixture #nothing').text().length;
        equal(len, 0, "0 divs found");

        $('#qunit-fixture #25').wrapItUp( { characterClassNames: [ 'doo', 'noo' ], innerDecorator:function(){ return "LL"; }  } );
        var len = $('#qunit-fixture #25').text().length;
        equal(len, 50, "50 chars found");

        $('#qunit-fixture #hotmess').wrapItUp( { characterClassNames: [ 'yoo', 'ioo' ], innerDecorator:function(){ return "KK"; }  } );
        var len = $('#qunit-fixture #hotmess').text().length;
        equal(len, 28, "28 chars found");

    });

    test('Test counting spans but using css classes as an array of strings and a tag of span',function(){
        expect(6);

        $('#qunit-fixture #nothing').wrapItUp( { characterClassNames: [ 'foo', 'goo'], characterTag:'span' } );
        var len = $('#qunit-fixture #nothing').find('span.foo').length;
        equal(len, 0, "0 divs found for a span with a class named foo");
        var len = $('#qunit-fixture #nothing').find('span.goo').length;
        equal(len, 0, "0 divs found for a span with a class named goo");

        $('#qunit-fixture #25').wrapItUp( { characterClassNames: [ 'doo', 'noo' ], characterTag:'span' } );
        var len = $('#qunit-fixture #25').find('span.doo').length;
        equal(len, 25, "25 spans found with class named doo");
        var len = $('#qunit-fixture #25').find('span.noo').length;
        equal(len, 25, "25 spans found with class named noo");

        $('#qunit-fixture #hotmess').wrapItUp( { characterClassNames: [ 'yoo', 'ioo' ], characterTag:'span' } );
        var len = $('#qunit-fixture #hotmess').find('span.yoo').length;
        equal(len, 14, "14 spans found with class named yoo");
        var len = $('#qunit-fixture #hotmess').find('span.ioo').length;
        equal(len, 14, "14 spans found with class named ioo");

    });

    test('Test counting spans but using css classes as an array of strings and a tag of span and the use of word classes too',function(){
        expect(12);

        $('#qunit-fixture #nothing').wrapItUp( { characterClassNames: [ 'A', 'B' ], wordClassNames: [ 'C', 'D' ], characterTag:'span' , wordTag:'span' } );
        var len = $('#qunit-fixture #nothing').find('span.A').length;
        equal(len, 0, "0 divs found for a span with a class named A");
        var len = $('#qunit-fixture #nothing').find('span.B').length;
        equal(len, 0, "0 divs found for a span with a class named B");
        var len = $('#qunit-fixture #nothing').find('span.C').length;
        equal(len, 0, "0 divs found for a span with a class named C");
        var len = $('#qunit-fixture #nothing').find('span.D').length;
        equal(len, 0, "0 divs found for a span with a class named D");


        $('#qunit-fixture #25').wrapItUp( { characterClassNames: [ 'A', 'B' ], wordClassNames: [ 'C', 'D' ], characterTag:'span' , wordTag:'span' }  );
        var len = $('#qunit-fixture #25').find('span.A').length;
        equal(len, 25, "25 spans found with class named A");
        var len = $('#qunit-fixture #25').find('span.B').length;
        equal(len, 25, "25 spans found with class named B");
        var len = $('#qunit-fixture #25').find('span.C').length;
        equal(len, 6, "6 spans found with class named C");
        var len = $('#qunit-fixture #25').find('span.D').length;
        equal(len, 6, "6 spans found with class named D");


        $('#qunit-fixture #hotmess').wrapItUp( { characterClassNames: [ 'A', 'B' ], wordClassNames: [ 'C', 'D' ], characterTag:'span' , wordTag:'span' }  );
        var len = $('#qunit-fixture #hotmess').find('span.A').length;
        equal(len, 14, "14 spans found with class named A");
        var len = $('#qunit-fixture #hotmess').find('span.B').length;
        equal(len, 14, "14 spans found with class named B");
        var len = $('#qunit-fixture #hotmess').find('span.C').length;
        equal(len, 3, "3 spans found with class named C");
        var len = $('#qunit-fixture #hotmess').find('span.D').length;
        equal(len, 3, "3 spans found with class named D");

    });

    test('Test none word boundry issues',function(){
        expect(2);
        $('#qunit-fixture #brand').wrapItUp( { characterClassNames: [ 'char' ], wordClassNames: [ 'word' ]  }  );
        var len = $('#qunit-fixture #brand').find('div.word').length;
        equal(len, 4, "14 spans found with class named word");
        var len = $('#qunit-fixture #brand').find('div.char').length;
        equal(len, 29, "29 spans found with class named char");
    });

    test('Test Destroy',function(){
        expect(3);

        var before = $('#qunit-fixture #nothing').html();
        $('#qunit-fixture #nothing').wrapItUp( { characterClassNames: [ 'foo', 'goo'], innerDecorator:function(){ return "ZZ'"; } } );
        $('#qunit-fixture #nothing').data('wrapItUp').destroy();
        var after = $('#qunit-fixture #nothing').html();
        deepEqual(after, before, "Destroy restored the original html (which was empty).");

        var before = $('#qunit-fixture #25').html();
        $('#qunit-fixture #25').wrapItUp( { characterClassNames: [ 'doo', 'noo' ], innerDecorator:function(){ return "LL"; }  } );
        $('#qunit-fixture #25').data('wrapItUp').destroy();
        var after = $('#qunit-fixture #25').html();
        deepEqual(after, before, "Destroy restored the original html (which had 60 characters in it).");

        var before = $('#qunit-fixture #hotmess').html();
        $('#qunit-fixture #hotmess').wrapItUp( { characterClassNames: [ 'yoo', 'ioo' ], innerDecorator:function(){ return "KK"; }  } );
        $('#qunit-fixture #hotmess').data('wrapItUp').destroy();
        var after = $('#qunit-fixture #hotmess').html();
        deepEqual(after, before, "Destroy restored the original html (which had a mix of html and text in it).");

    });

}(jQuery));
