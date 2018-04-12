// ==UserScript==
// @name         TRVL Checkout Autofill
// @namespace    https://trvl.com/
// @version      0.1.8
// @description  Populate all input fields on the checkout pages
// @homepageURL  https://github.com/TRVL/tampermonkey
// @author       Ricardo Cino
// @match        *.trvl.test/book*
// @match        *.trvl-reboot.dev/book*
// @match        *.trvl-reboot.test/book*
// @match        *.trvl.yt/book*
// @match        *.trvl.com/book*
// @require      http://code.jquery.com/jquery-3.2.1.min.js
// @updateURL    https://rawgit.com/Trvl/tampermonkey/master/autofill-checkout.js
// @downloadURL  https://rawgit.com/Trvl/tampermonkey/master/autofill-checkout.js
// @supportURL   https://github.com/TRVL/tampermonkey/issues
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('.checkout-button').before('<button type="button" id="fillform_tampermonkey" class="button checkout-button" style="background-color: #fff; border-color: #f19b39; color: #f19b39; float: right; margin-right: 24px;">Fill Form</button>');

    $('#fillform_tampermonkey').click(function() {
        $('#firstname').val('John');
        $('#lastname').val('Batman');
        $('#email').val(window.Laravel.user.email || '');
        $('#phonenumber').val('612345678');
        $('#phoneNumber').val('+31612345678');
        $('#comments').val('Default request');

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
