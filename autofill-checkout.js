// ==UserScript==
// @name         TRVL Checkout Autofill
// @namespace    https://trvl.com/
// @version      0.2.5
// @description  Populate all input fields on the checkout pages
// @homepageURL  https://github.com/TRVL/tampermonkey
// @author       Ricardo Cino
// @match        *.trvl.test/book*
// @match        *.trvl.yt/book*
// @match        *.trvl.com/book*
// @updateURL    https://rawgit.com/Trvl/tampermonkey/master/autofill-checkout.js
// @downloadURL  https://rawgit.com/Trvl/tampermonkey/master/autofill-checkout.js
// @supportURL   https://github.com/TRVL/tampermonkey/issues
// @grant        none
// ==/UserScript==

(function() {
    const button = document.querySelector('.checkout-button');

    if (!button) return;

    const blurEvent = new Event('blur');
    const changeEvent = new Event('change');
    const inputEvent = new Event('input');

    const set = (id, value) => {
        const el = document.getElementById(id);
        el.value = value;
        el.dispatchEvent(inputEvent);
        el.dispatchEvent(blurEvent);
    };
    const update = id => document.getElementById(id).dispatchEvent(changeEvent);

    button.insertAdjacentHTML('afterend', `
        <button
            id="checkout-fill"
            class="button checkout-button"
            style="
                background-color: #fff;
                border-color: #f19b39;
                color: #f19b39;
            "
            type="button"
        >
            Fill Form
        </button>
    `);

    document.getElementById('checkout-fill').addEventListener('click', () => {
        if (window.route().current('bookings.create')) {
            set('firstName', 'John');
            set('lastName', 'Batman');
            set('email', window.Laravel.user.email || '');
            set('phonenumber', '612345678');
            set('phoneNumber', '+31612345678');
            set('comments', 'Default request');
        } else if (window.route().current('bookings.payment')) {
            set('creditCardAddress', 'Herengracht 338');
            set('creditCardCity', 'Amsterdam');
            set('creditCardState', 'Noord-Holland');
            set('creditCardZipCode', '1016 CG');
            set('creditCardCountry', 'NL');

            update('creditCardCountry');

            set('creditCardFirstName', 'John');
            set('creditCardLastName', 'Batman');
            set('creditCardNumber', '5275687365121871');
            set('creditCardExpirationMonth', '2');
            set('creditCardExpirationYear', '2019');
            set('creditCardIdentifier', '845');

            update('creditCardExpirationMonth');
            update('creditCardExpirationYear');
        }
    });
})();
