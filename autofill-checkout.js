// ==UserScript==
// @name         Trvl Autofill checkout
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Ricardo Cino
// @match        *.trvl-reboot.dev/book?page=checkout*
// @match        *.develop.trvl.yt/book?page=checkout*
// @match        *.feature.trvl.yt/book?page=checkout*
// @match        *.demo.trvl.yt/book?page=checkout*
// @match        *.trvl.com/book?page=checkout*
// @require      http://code.jquery.com/jquery-3.2.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('.checkout-button').before('<button type="button" id="fillform_tampermonkey" class="button checkout-button" style="float:left; background-color:#f19b39;">Fill Form</button>');

    $('#fillform_tampermonkey').click(function() {
        $('#firstname').val('John');
        $('#lastname').val('Batman');
        $('#email').val(''); // Set email here
        $('#phonenumber').val('612345678');
        $('#comments').val('Default request.');

        $('#creditCardFirstname').val('John');
        $('#creditCardLastname').val('Batman');
        $('#creditCardAddress').val('Herengracht 338');
        $('#creditCardCity').val('Amsterdam');
        $('#creditCardState').val('Noord Holland');
        $('#creditCardZipcode').val('1016CG');
        $("#creditCardCountry").val("NL").change();

        // Fake creditcard
        $("#creditCardType").val("CA").change();
        $("#creditCardNumber").val("5275687365121871");
        $("#creditCardExpirationMonth").val("2").change();
        $("#creditCardExpirationYear").val("2019").change();
        $("#creditCardIdentifier").val("845");
    });
})();