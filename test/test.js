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

        $('#qunit-fixture #30').wrapItUp();
        var len = $('#qunit-fixture #30').find('div').length;
        equal(len, 30, "30 divs found");

        $('#qunit-fixture #hotmess').wrapItUp();
        var len = $('#qunit-fixture #hotmess').find('div').length;
        equal(len, 16, "16 divs found");

    });

    test('Test counting divs but using a complex config',function(){
        expect(3);

        $('#qunit-fixture #nothing').wrapItUp( { className: [ 'foo', 'goo'] } );
        var len = $('#qunit-fixture #nothing').find('.foo.goo').length;
        equal(len, 0, "0 divs found");

        $('#qunit-fixture #30').wrapItUp( { className: [ 'doo', 'noo' ] } );
        var len = $('#qunit-fixture #30').find('.doo.noo').length;
        equal(len, 30, "30 divs found");

        $('#qunit-fixture #hotmess').wrapItUp( { className: [ 'yoo', 'ioo' ] } );
        var len = $('#qunit-fixture #hotmess').find('.yoo.ioo').length;
        equal(len, 16, "16 divs found");

    });

    test('Test counting divs but using css classes as vararg',function(){
        expect(3);

        $('#qunit-fixture #nothing').wrapItUp( 'foo', 'goo' );
        var len = $('#qunit-fixture #nothing').find('.foo.goo').length;
        equal(len, 0, "0 divs found");

        $('#qunit-fixture #30').wrapItUp( 'doo', 'noo' );
        var len = $('#qunit-fixture #30').find('.doo.noo').length;
        equal(len, 30, "30 divs found");

        $('#qunit-fixture #hotmess').wrapItUp( 'yoo', 'ioo' );
        var len = $('#qunit-fixture #hotmess').find('.yoo.ioo').length;
        equal(len, 16, "16 divs found");

    });

    test('Test counting divs but using css classes as an array of strings',function(){
        expect(3);

        $('#qunit-fixture #nothing').wrapItUp( ['foo', 'goo'] );
        var len = $('#qunit-fixture #nothing').find('.foo.goo').length;
        equal(len, 0, "0 divs found");

        $('#qunit-fixture #30').wrapItUp( ['doo', 'noo'] );
        var len = $('#qunit-fixture #30').find('.doo.noo').length;
        equal(len, 30, "30 divs found");

        $('#qunit-fixture #hotmess').wrapItUp( ['yoo', 'ioo'] );
        var len = $('#qunit-fixture #hotmess').find('.yoo.ioo').length;
        equal(len, 16, "16 divs found");

    });

    test('Test counting divs but using a tagDecorator',function(){
        expect(3);

        $('#qunit-fixture #nothing').wrapItUp( { className: [ 'foo', 'goo'], tagDecorator:function(){ return "role='A'"; } } );
        var len = $('#qunit-fixture #nothing').find("[role|='A']").length;
        equal(len, 0, "0 divs found");

        $('#qunit-fixture #30').wrapItUp( { className: [ 'doo', 'noo' ], tagDecorator:function(){ return "role='B'"; }  } );
        var len = $('#qunit-fixture #30').find("[role|='B']").length;
        equal(len, 30, "30 divs found");

        $('#qunit-fixture #hotmess').wrapItUp( { className: [ 'yoo', 'ioo' ], tagDecorator:function(){ return "role='C'"; }  } );
        var len = $('#qunit-fixture #hotmess').find("[role|='C']").length;
        equal(len, 16, "16 divs found");

    });

    test('Test counting chars as a by product of innerDecorator',function(){
        expect(3);

        $('#qunit-fixture #nothing').wrapItUp( { className: [ 'foo', 'goo'], innerDecorator:function(){ return "ZZ'"; } } );
        var len = $('#qunit-fixture #nothing').text().length;
        equal(len, 0, "0 divs found");

        $('#qunit-fixture #30').wrapItUp( { className: [ 'doo', 'noo' ], innerDecorator:function(){ return "LL"; }  } );
        var len = $('#qunit-fixture #30').text().length;
        equal(len, 60, "60 chars found");

        $('#qunit-fixture #hotmess').wrapItUp( { className: [ 'yoo', 'ioo' ], innerDecorator:function(){ return "KK"; }  } );
        var len = $('#qunit-fixture #hotmess').text().length;
        equal(len, 32, "32 chars found");

    });

    test('Test counting spans but using css classes as an array of strings and a tag of span',function(){
        expect(3);

        $('#qunit-fixture #nothing').wrapItUp( { className: [ 'foo', 'goo'], tag:'span' } );
        var len = $('#qunit-fixture #nothing').find('span.foo.goo').length;
        equal(len, 0, "0 divs found");

        $('#qunit-fixture #30').wrapItUp( { className: [ 'doo', 'noo' ], tag:'span' } );
        var len = $('#qunit-fixture #30').find('span.doo.noo').length;
        equal(len, 30, "30 divs found");

        $('#qunit-fixture #hotmess').wrapItUp( { className: [ 'yoo', 'ioo' ], tag:'span' } );
        var len = $('#qunit-fixture #hotmess').find('span.yoo.ioo').length;
        equal(len, 16, "16 divs found");

    });

    test('Test Destroy',function(){
        expect(3);

        var before = $('#qunit-fixture #nothing').html();
        $('#qunit-fixture #nothing').wrapItUp( { className: [ 'foo', 'goo'], innerDecorator:function(){ return "ZZ'"; } } );
        $('#qunit-fixture #nothing').data('wrapItUp').destroy();
        var after = $('#qunit-fixture #nothing').html();
        deepEqual(after, before, "Destroy restored the original html (which was empty).");

        var before = $('#qunit-fixture #30').html();
        $('#qunit-fixture #30').wrapItUp( { className: [ 'doo', 'noo' ], innerDecorator:function(){ return "LL"; }  } );
        $('#qunit-fixture #30').data('wrapItUp').destroy();
        var after = $('#qunit-fixture #30').html();
        deepEqual(after, before, "Destroy restored the original html (which had 60 characters in it).");

        var before = $('#qunit-fixture #hotmess').html();
        $('#qunit-fixture #hotmess').wrapItUp( { className: [ 'yoo', 'ioo' ], innerDecorator:function(){ return "KK"; }  } );
        $('#qunit-fixture #hotmess').data('wrapItUp').destroy();
        var after = $('#qunit-fixture #hotmess').html();
        deepEqual(after, before, "Destroy restored the original html (which had a mix of html and text in it).");

    });

}(jQuery));
