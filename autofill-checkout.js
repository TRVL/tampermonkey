// ==UserScript==
// @name         TRVL Checkout Autofill
// @namespace    https://trvl.com/
// @version      0.2.3
// @description  Populate all input fields on the checkout pages
// @homepageURL  https://github.com/TRVL/tampermonkey
// @author       Ricardo Cino
// @match        *.trvl.test/book*
// @match        *.trvl-reboot.dev/book*
// @match        *.trvl-reboot.test/book*
// @match        *.trvl.yt/book*
// @match        *.trvl.com/book*
// @updateURL    https://rawgit.com/Trvl/tampermonkey/master/autofill-checkout.js
// @downloadURL  https://rawgit.com/Trvl/tampermonkey/master/autofill-checkout.js
// @supportURL   https://github.com/TRVL/tampermonkey/issues
// @grant        none
// ==/UserScript==

(function() {
    const button = document.querySelector('.checkout-button');
    const change = new Event('change');

    if (!button) return;

    const set = (id, value) => document.getElementById(id).value = value;
    const update = id => document.getElementById(id).dispatchEvent(change);

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
            document.getElementById('firstName').dispatchEvent(new Event('input', { 'bubbles': true }));
            set('lastName', 'Batman');
            document.getElementById('lastName').dispatchEvent(new Event('input', { 'bubbles': true }));
            set('email', window.Laravel.user.email || '');
            document.getElementById('email').dispatchEvent(new Event('input', { 'bubbles': true }));
            set('phonenumber', '612345678');
            document.getElementById('phonenumber').dispatchEvent(new Event('input', { 'bubbles': true }));
            set('phoneNumber', '+31612345678');
            document.getElementById('phoneNumber').dispatchEvent(new Event('input', { 'bubbles': true }));
            set('comments', 'Default request');
        } else if (window.route().current('bookings.payment')) {
            set('creditCardAddress', 'Herengracht 338');
            document.getElementById('creditCardAddress').dispatchEvent(new Event('input', { 'bubbles': true }));
            set('creditCardCity', 'Amsterdam');
            document.getElementById('creditCardCity').dispatchEvent(new Event('input', { 'bubbles': true }));
            set('creditCardState', 'Noord-Holland');
            document.getElementById('creditCardState').dispatchEvent(new Event('input', { 'bubbles': true }));
            set('creditCardZipCode', '1016 CG');
            document.getElementById('creditCardZipCode').dispatchEvent(new Event('input', { 'bubbles': true }));
            set('creditCardCountry', 'NL');
            document.getElementById('creditCardCountry').dispatchEvent(new Event('input', { 'bubbles': true }));

            update('creditCardCountry');

            set('creditCardFirstName', 'John');
            document.getElementById('creditCardFirstName').dispatchEvent(new Event('input', { 'bubbles': true }));
            set('creditCardLastName', 'Batman');
            document.getElementById('creditCardLastName').dispatchEvent(new Event('input', { 'bubbles': true }));
            set('creditCardNumber', '5275687365121871');
            document.getElementById('creditCardNumber').dispatchEvent(new Event('input', { 'bubbles': true }));
            set('creditCardExpirationMonth', '2');
            document.getElementById('creditCardExpirationMonth').dispatchEvent(new Event('input', { 'bubbles': true }));
            set('creditCardExpirationYear', '2019');
            document.getElementById('creditCardExpirationYear').dispatchEvent(new Event('input', { 'bubbles': true }));
            set('creditCardIdentifier', '845');
            document.getElementById('creditCardIdentifier').dispatchEvent(new Event('input', { 'bubbles': true }));

            update('creditCardExpirationMonth');
            update('creditCardExpirationYear');
        }
    });
})();