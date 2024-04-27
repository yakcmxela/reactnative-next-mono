"use strict";
exports.__esModule = true;
exports.currencyFormatter = void 0;
var currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});
exports.currencyFormatter = currencyFormatter;
