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
var auth_service_1 = require("../../authentication/auth.service");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var UserProfileComponent = (function () {
    function UserProfileComponent(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var firstName = new forms_1.FormControl(this._authenticationService.currentUser.FirstName);
        var lastName = new forms_1.FormControl(this._authenticationService.currentUser.LastName);
        var isAdmin = new forms_1.FormControl(this._authenticationService.currentUser.IsAdmin);
        this.profileFormGroup = new forms_1.FormGroup({
            givenName: firstName,
            surName: lastName,
            isAdministrator: isAdmin,
            userName: new forms_1.FormControl(this._authenticationService.currentUser.UserName),
            id: new forms_1.FormControl(this._authenticationService.currentUser.UserId)
        });
    };
    UserProfileComponent.prototype.cancelUpdate = function () {
        this._router.navigate(['welcome']);
    };
    UserProfileComponent.prototype.updateProfile = function (form) {
        var updatedUser;
        updatedUser = {
            UserId: this._authenticationService.currentUser.UserId,
            UserName: form.userName,
            FirstName: form.givenName,
            LastName: form.surName,
            IsAdmin: form.isAdministrator
        };
        console.log(updatedUser);
        this._authenticationService.updateUser(updatedUser);
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    core_1.Component({
        templateUrl: 'user-profile.component.htm',
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthenticationService,
        router_1.Router])
], UserProfileComponent);
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.component.js.map