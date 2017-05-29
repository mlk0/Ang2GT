"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var product_list_component_1 = require("./product-list.component");
var product_detail_component_1 = require("./product-detail.component");
var product_guard_canactivate_service_1 = require("./product-guard-canactivate-service");
var product_detail_guard_candeactivate_service_1 = require("./product-detail-guard-candeactivate-service");
var item_count_component_1 = require("../item-count/item-count.component");
var product_list_pipe_1 = require("./product-list.pipe");
var customer_module_1 = require("../customers/customer.module");
var product_routes_1 = require("./product.routes");
var product_list_guard_canresolve_service_1 = require("./product-list-guard-canresolve.service");
var product_service_1 = require("./product-service");
//import { StarComponent } from "../shared/star.component";
var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule, common_1.CommonModule,
            customer_module_1.CustomerModule
            //  ,VendorModule
            //  ,SharedModule
            //,StarComponent
            ,
            router_1.RouterModule.forChild(
            // [
            //     { path: 'products', component: ProductListComponent },
            //     {
            //         path: 'product/:id', component: ProductDetailComponent,
            //         canActivate: [ProductDetailsCanActivateGuardService],
            //         canDeactivate: [ProductDetailCanDeactivateService]
            //     }
            // ]
            product_routes_1.productRoutes)
        ],
        //exports : [SharedModule,CustomerModule],
        providers: [
            product_service_1.ProductService,
            product_guard_canactivate_service_1.ProductDetailsCanActivateGuardService,
            product_detail_guard_candeactivate_service_1.ProductDetailCanDeactivateService,
            product_list_guard_canresolve_service_1.ProductListCanResolveGuard
        ],
        declarations: [
            product_list_component_1.ProductListComponent,
            product_detail_component_1.ProductDetailComponent,
            item_count_component_1.ProductItemsComponent,
            product_list_pipe_1.ProductListFilter
        ]
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map