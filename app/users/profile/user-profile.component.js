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
        var firstName = new forms_1.FormControl(this._authenticationService.currentUser.FirstName, [forms_1.Validators.required, forms_1.Validators.pattern("^[a-zA-Z ]+$")]); //must not contain special characters nor numbers, only letters
        var lastName = new forms_1.FormControl(this._authenticationService.currentUser.LastName);
        var isAdmin = new forms_1.FormControl(this._authenticationService.currentUser.IsAdmin);
        this.profileFormGroup = new forms_1.FormGroup({
            givenName: firstName,
            surName: lastName,
            isAdministrator: isAdmin,
            userName: new forms_1.FormControl(this._authenticationService.currentUser.UserName, forms_1.Validators.required),
            id: new forms_1.FormControl(this._authenticationService.currentUser.UserId),
            location: new forms_1.FormGroup({
                address: new forms_1.FormControl("address sample"),
                zip: new forms_1.FormControl("12334")
            })
        });
    };
    UserProfileComponent.prototype.cancelUpdate = function () {
        this._router.navigate(['welcome']);
    };
    UserProfileComponent.prototype.updateProfile = function (profileFormGroupValue) {
        console.log("profileFormGroup.value : " + JSON.stringify(profileFormGroupValue));
        if (this.profileFormGroup.valid) {
            var updatedUser = void 0;
            updatedUser = {
                UserId: this._authenticationService.currentUser.UserId,
                UserName: profileFormGroupValue.userName,
                FirstName: profileFormGroupValue.givenName,
                LastName: profileFormGroupValue.surName,
                IsAdmin: profileFormGroupValue.isAdministrator
            };
            console.log("updatedUser : " + JSON.stringify(updatedUser));
            this._authenticationService.updateUser(updatedUser);
        }
    };
    UserProfileComponent.prototype.isValidUserName = function () {
        var userNameValidity = this.profileFormGroup.controls.userName.valid || this.profileFormGroup.controls.userName.untouched;
        console.log('userNameValidity : ' + userNameValidity);
        return userNameValidity;
    };
    UserProfileComponent.prototype.isValidGivenName = function () {
        var givenNameIsValid = this.profileFormGroup.controls.givenName.valid || this.profileFormGroup.controls.givenName.untouched;
        console.log('givenNameIsValid : ' + givenNameIsValid);
        return givenNameIsValid;
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    core_1.Component({
        templateUrl: 'user-profile.component.htm',
        styleUrls: ['user-profile.component.css'],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthenticationService,
        router_1.Router])
], UserProfileComponent);
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.component.js.map