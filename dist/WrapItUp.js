/*
 * WrapItUp - v2.0.0 
 * 2014-02-22 
 * http://psenger.github.io/WrapItUp 
 * Copyright (c) 2014 Philip A Senger 
 * Licensed Apache
 */
(function ($, window, document, undefined) {
/**
 * @fileoverview wrapItUp is a jQuery pluggin designed to take the selected inner text of a jQuery Selection and for each character wrap it with a tag. By default space is converted to non-break space.
 * @copyright Philip A Senger 2014
 * @author Philip A Senger <philip dot a dot senger at cngrgroup dot com>
 * @license Apache
 * @module jQuery.fn.wrapItUp
 * @example
 *<pre>
 * $('#target').wrapItUp('foo');
 * $('#target').wrapItUp('foo','goo');
 * $('#target').wrapItUp({characterClassNames:['goo'], wordClassNames:['foo']});
 * $('#target').wrapItUp({
 *                  characterClassNames:['foo'],
 *                  innerDecorator: function ( i, v ) {
 *                                       if (v === " ") {
 *                                           return "&nbsp;";
 *                                       } else {
 *                                           return (v?v.toUpperCase():v);
 *                                      }
 *                                   }
 *                  });
 *</pre>
 */

/**
 * Constructor for the wrapItUp pluggin.
 * @class Wrapper is used by wrapItUp Pluggin to execute much of the functions.
 * @param {jQuery} element a single jquery selected element.
 * @param {Object} options a configuration object that will override the defaults.
 */
function wrapper( element, options ) {
    this.$element = $(element);
    this.params = $.extend( true, {}, wrapper.prototype.defaults, options );
    this.init();
}
/**  @namespace **/
wrapper.prototype = {
    /**
     * Initialize the wrapItUp object.
     */
    init: function () {
        this.oldHtml = this.$element.html();

        var splitWords = this.$element.text().split(/\s/g);

        var wordClassNames = $.makeArray( this.params.wordClassNames ).join(" ");
        var characterClassNames = $.makeArray( this.params.characterClassNames ).join(" ");

        if (splitWords.length > 0) {
            var concat = '';
            for (var j = 0; j < splitWords.length; j++) {
                var splitCharacters = splitWords[j].split("");
                var opentag = false;
                if ( splitCharacters.length !== 0 && wordClassNames.length !== 0 ) {
                    concat += "<" + this.params.wordTag + " class='" + wordClassNames + "'>";
                    opentag = true;
                }
                for (var i = 0; i < splitCharacters.length; i++) {
                    concat += "<" + this.params.characterTag + " class='" + characterClassNames + "'" + this.params.tagDecorator( i, splitCharacters[i] ) + ">" + this.params.innerDecorator(i, splitCharacters[i] ) + "</" + this.params.characterTag + ">";
                }
                if ( opentag ) {
                    concat += "</" + this.params.wordTag + ">";
                    opentag = false;
                }
            }
            this.$element.html(concat);
        }
    },
    /**
     * Destroy this pluggin and restore the original inner value.
     */
    destroy: function() {
        this.$element.html(this.oldHtml);
        this.$element.removeData("wrapItUp");
    },
    /**
     * @property {object}   defaults                     - The default settings of this object.
     * @property {string[]} defaults.characterClassNames - An array of strings that determines the css classes to attach to each tag.
     * @property {string[]} defaults.wordClassNames      - An array of strings that determines the css classes to attach to each tag.
     * @property {string}   defaults.characterTag        - Tag type used to wrap characters, defaulted to div.
     * @property {string}   defaults.wordTag             - Tag type used to wrap words, defaulted to div.
     * @property {function} defaults.tagDecorator        - Wrapping tag attribute decorator.
     * @property {function} defaults.innerDecorator      - Inner content decorator for each character.
     */
    defaults : {
        characterClassNames: [],
        wordClassNames: [],
        characterTag: "div",
        wordTag: "div",
        /**
         * Decorator responsible for rendering tag attribute which will wrap each character.
         * @param {integer} i position within the array of characters.
         * @param {string} v The current character of the inner values.
         * @returns {string} The tag attributes.
         */
        tagDecorator: function( i, v ){
            return "";
        },
        /**
         * Decorator responsible for rendering each character of the inner value. This might be a good place to over characters with html escaped values.
         * @param {integer} i position within the array of characters.
         * @param {string} v The current character of the inner values.
         * @returns {string} The replacing character of the current inner value.
         */
        innerDecorator: function ( i, v ) {
            if (v === " ") {
                return "&nbsp;";
            } else {
                return v;
            }
        }
    }
};

/**
 * This is the core selector responsible for Attaching the function to the selected items.
 *  @function external:"jQuery.fn".wrapItUp
 *  @param {option|string[]} [options] A configuration object that will override the defaults or provide the css classes you want to attach to each div.
 */
$.fn.wrapItUp = function() {
    var options = {};
    if ( arguments.length === 1 ) {
        if ( typeof arguments[0] === 'string' ) {
            options = { characterClassNames: [ arguments[0] ] };
        } else if ( $.isArray( arguments[0] ) ) {
            options = { characterClassNames: arguments[0] };
        } else if ( typeof arguments[0] === 'object' ) {
            options = arguments[0];
        }
    } else if ( arguments.length > 1 ) {
        var args = Array.prototype.slice.call(arguments);
        options = { characterClassNames: args };
    }
    return this.each(function () {
        if (!$(this).data("wrapItUp")) {
            $(this).data("wrapItUp", new wrapper( this, options ) );
        }
    });
};

/**
 * This callback is a decorator responsible for rendering tag attribute which will wrap each character.
 * @callback tagDecorator
 * @param {integer} i position within the array of characters.
 * @param {string} v The current character of the inner values.
 * @returns {string} The tag attributes.
 */

/**
 * This callback is a decorator responsible for rendering each character of the inner value. This might be a good place to over characters with html escaped values.
 * @callback innerDecorator
 * @param {integer} i position within the array of characters.
 * @param {string} v The current character of the inner values.
 * @returns {string} The replacing character of the current inner value.
 */
})(jQuery, window, document);