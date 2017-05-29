"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_list_component_1 = require("./product-list.component");
var product_detail_component_1 = require("./product-detail.component");
var product_guard_canactivate_service_1 = require("./product-guard-canactivate-service");
var product_detail_guard_candeactivate_service_1 = require("./product-detail-guard-candeactivate-service");
exports.productRoutes = [
    { path: 'products', component: product_list_component_1.ProductListComponent },
    {
        path: 'product/:id', component: product_detail_component_1.ProductDetailComponent,
        canActivate: [product_guard_canactivate_service_1.ProductDetailsCanActivateGuardService],
        canDeactivate: [product_detail_guard_candeactivate_service_1.ProductDetailCanDeactivateService]
    }
];
//# sourceMappingURL=product.routes.js.map