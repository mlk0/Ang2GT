"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TeenCustomersFilter = (function () {
    function TeenCustomersFilter() {
    }
    TeenCustomersFilter.prototype.transform = function (value) {
        if (value) {
            var filtered = value.filter(function (c) { return c.age < 20; });
            return filtered;
        }
        return value;
    };
    return TeenCustomersFilter;
}());
TeenCustomersFilter = __decorate([
    core_1.Pipe({
        name: "teens"
    })
], TeenCustomersFilter);
exports.TeenCustomersFilter = TeenCustomersFilter;
//# sourceMappingURL=customer-list-teens.pipe.js.map