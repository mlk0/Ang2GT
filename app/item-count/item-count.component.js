"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var itemCount_1 = require("./itemCount");
var ProductItemsComponent = (function () {
    function ProductItemsComponent() {
        this.itemQuantity = 0;
        this.itemId = 0;
        this.notifyIteQuantityChanged = new core_1.EventEmitter();
    }
    ProductItemsComponent.prototype.incrementByOne = function () {
        this.itemQuantity++;
        this.notifyIteQuantityChanged.emit(new itemCount_1.ItemCount(this.itemQuantity, this.itemId));
        return this.itemQuantity;
    };
    ;
    ProductItemsComponent.prototype.decrementByOne = function () {
        this.itemQuantity--;
        this.notifyIteQuantityChanged.emit(new itemCount_1.ItemCount(this.itemQuantity, this.itemId));
        return this.itemQuantity;
    };
    ;
    return ProductItemsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ProductItemsComponent.prototype, "itemQuantity", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ProductItemsComponent.prototype, "itemId", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ProductItemsComponent.prototype, "notifyIteQuantityChanged", void 0);
ProductItemsComponent = __decorate([
    core_1.Component({
        selector: "pm-item-count",
        moduleId: module.id,
        templateUrl: "item-count.component.htm",
        styleUrls: ["item-count.component.css"]
    })
], ProductItemsComponent);
exports.ProductItemsComponent = ProductItemsComponent;
//# sourceMappingURL=item-count.component.js.map