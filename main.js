(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav> <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/banner/banner.component */ "./src/app/components/banner/banner.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_cover_cover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/cover/cover.component */ "./src/app/components/cover/cover.component.ts");
/* harmony import */ var _components_guests_guests_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/guests/guests.component */ "./src/app/components/guests/guests.component.ts");
/* harmony import */ var _components_dress_code_dress_code_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dress-code/dress-code.component */ "./src/app/components/dress-code/dress-code.component.ts");
/* harmony import */ var _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/faq/faq.component */ "./src/app/components/faq/faq.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// ROUTES
var appRoutes = [
    { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: "guests", component: _components_guests_guests_component__WEBPACK_IMPORTED_MODULE_9__["GuestsComponent"] },
    { path: "dress-code", component: _components_dress_code_dress_code_component__WEBPACK_IMPORTED_MODULE_10__["DressCodeComponent"] },
    { path: "faq", component: _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_11__["FaqComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                _components_cover_cover_component__WEBPACK_IMPORTED_MODULE_8__["CoverComponent"],
                _components_guests_guests_component__WEBPACK_IMPORTED_MODULE_9__["GuestsComponent"],
                _components_dress_code_dress_code_component__WEBPACK_IMPORTED_MODULE_10__["DressCodeComponent"],
                _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_11__["FaqComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/banner/banner.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/banner/banner.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/banner/banner.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/banner/banner.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Banner a -->\n<!-- <section class=\"banner-a\">\n  <div class=\"vertical-align\">\n    <div class=\"vertical-align-item\">\n      <div class=\"container text-center fade-in\">\n        <h2 class=\"text-capitalize display-4 text-white\">\n          Eat, Drink & Be Married\n        </h2>\n      </div>\n    </div>\n  </div>\n</section> -->\n<!-- END Banner a -->\n\n<!-- section background image -->\n<section class=\"bg-a py-5\">\n  <div class=\"vertical-align py-5\">\n    <div class=\"vertical-align-item\">\n      <div class=\"container text-center fade-in\">\n        <h2 class=\"text-xl text-white text-capitalize mb-0\">\n          Eat, Drink & Be Married\n        </h2>\n        <div class=\"col-md-10 mx-auto\">\n          <p class=\"text-md text-white text-capitalize\">\n            Thank you all for accepting our invitation and sharing this special\n            day with us. We are delighted to be spending this day with our\n            closest family and friends. If you’re reading this now then yes\n            you’re one of them…. Don’t you feel special\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/banner/banner.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/banner/banner.component.ts ***!
  \*******************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/components/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/components/banner/banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/components/cover/cover.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/cover/cover.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/cover/cover.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/cover/cover.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Cover a -->\n<section class=\"cover-a\">\n  <div class=\"vertical-align\">\n    <div class=\"vertical-align-item\">\n      <div class=\"container text-center fade-in\">\n        <h2 class=\"text-capitalize display-4 text-white\">cover a</h2>\n        <h3 class=\"text-capitalize font-weight-light text-light\">\n          a basic cover image\n        </h3>\n        <a href=\"#footer\" class=\"btn btn-outline-white btn-lg page-scroll mt-3\"\n          >Section Scroll</a\n        >\n      </div>\n    </div>\n  </div>\n</section>\n<!-- END Cover a -->\n"

/***/ }),

/***/ "./src/app/components/cover/cover.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/cover/cover.component.ts ***!
  \*****************************************************/
/*! exports provided: CoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverComponent", function() { return CoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoverComponent = /** @class */ (function () {
    function CoverComponent() {
    }
    CoverComponent.prototype.ngOnInit = function () {
    };
    CoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cover',
            template: __webpack_require__(/*! ./cover.component.html */ "./src/app/components/cover/cover.component.html"),
            styles: [__webpack_require__(/*! ./cover.component.css */ "./src/app/components/cover/cover.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CoverComponent);
    return CoverComponent;
}());



/***/ }),

/***/ "./src/app/components/dress-code/dress-code.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/dress-code/dress-code.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dress-code/dress-code.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/dress-code/dress-code.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Banner -->\n<section class=\"bg-d py-5\">\n  <div class=\"vertical-align py-5\">\n    <div class=\"vertical-align-item\">\n      <div class=\"container text-center fade-in\">\n        <h2 class=\"text-xl text-white text-capitalize mb-0\">\n          Dress Code\n        </h2>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End Banner -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-8 offset-lg-3 offset-md-2\">\n      <div class=\"ornament-top\"></div>\n      <p>\n        The theme is British summer wedding. So anything formal. The colour\n        scheme is pastel colours.\n      </p>\n      <p>\n        Dress to impress! We shall be giving a prize to the best dressed guest,\n        so put your best outfit on to be in for a special prize.\n      </p>\n      <p>\n        Also, we want to party after the programme so make sure you’re wearing\n        something comfortable. We’re gonna party!!!! It’s a celebration after\n        all.\n      </p>\n      <div class=\"ornament-bottom\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dress-code/dress-code.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/dress-code/dress-code.component.ts ***!
  \***************************************************************/
/*! exports provided: DressCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DressCodeComponent", function() { return DressCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DressCodeComponent = /** @class */ (function () {
    function DressCodeComponent() {
    }
    DressCodeComponent.prototype.ngOnInit = function () {
    };
    DressCodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dress-code',
            template: __webpack_require__(/*! ./dress-code.component.html */ "./src/app/components/dress-code/dress-code.component.html"),
            styles: [__webpack_require__(/*! ./dress-code.component.css */ "./src/app/components/dress-code/dress-code.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DressCodeComponent);
    return DressCodeComponent;
}());



/***/ }),

/***/ "./src/app/components/faq/faq.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/faq/faq.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/faq/faq.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/faq/faq.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Banner -->\n<section class=\"bg-e py-5\">\n  <div class=\"vertical-align py-5\">\n    <div class=\"vertical-align-item\">\n      <div class=\"container text-center fade-in\">\n        <h2 class=\"text-xl text-white text-capitalize mb-0\">\n          FAQs\n        </h2>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End Banner -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-8 offset-lg-3 offset-md-2\">\n      <div class=\"ornament-top\"></div>\n      <h5 class=\"text-center\">Dietary Requirements</h5>\n      <p>\n        Everything will be nut free but if you have any other allergies please\n        let us know so we can inform the caterers.\n      </p>\n      <hr />\n      <h5 class=\"text-center\">Hotels</h5>\n      <p>\n        If you require any rooms to stay in that are close to the Cove resort,\n        just simply type in CDO hotels on this link: www.google.com\n      </p>\n      <p>\n        Sike!!!.....here are two places you can stay in if you wish. They’re\n        both around 5-10 min walk (depending which one you stay in)\n      </p>\n      <a href=\"https://www.chalibeachresort.com/\" target=\"_blank\"\n        >Chali Beach Resort</a\n      ><br />\n      <a\n        href=\"https://www.tripadvisor.co.uk/Hotel_Review-g317124-d1553471-Reviews-or5-MARCO_HOTEL-Cagayan_de_Oro_Misamis_Oriental_Province_Mindanao.html\"\n        target=\"_blank\"\n        >Marco Hotel</a\n      >\n      <hr />\n      <h5 class=\"text-center\">Transport</h5>\n      <p>\n        It’s actually quite easy to get to and the place is very well known. You\n        can get a Grab (it’s like uber for the Londoners) and it’s kind of\n        cheap. A normal taxi will do as well (again it’s kind of cheap).\n      </p>\n      <p>\n        Well I say cheap as long as you don’t make it obvious you’re a\n        foreigner. Londoners put your best Filipino accent on.\n      </p>\n      <hr />\n      <h5 class=\"text-center\">First Time Visitors</h5>\n      <p>\n        For those of you that are visiting CDO for the first time, I hope you\n        all enjoy it. The city centre is not too far from the beaches (about an\n        hour away by car) and it’s about an hour drive to the airport as well.\n      </p>\n      <p>\n        To get around the city is easy as well as taxi’s are always available\n        and cheaper than Manila. As I mentioned above you can use an app called\n        Grab. You can’t really get lost in the city as Google Maps is available.\n      </p>\n      <p>\n        For you shoppers, or you just want good aircon, there are three malls in\n        the city centre. Centrio Ayala malls, (our personal favourite!), SM &\n        Lim Ketkai Mall. There are also hotels nearby each one if you wish to\n        stay around the city centre.\n      </p>\n      <p>\n        If you would like to take a day trip then there is Dahilayan you can go\n        to. This place has zip lines, mini golf, downhill karting etc. It’s an\n        adventure park for everyone to enjoy. You can also stay overnight there.\n        It is about 2-3 hours drive depending on traffic.\n      </p>\n      <p>\n        Another trip you can do is to a beach called Camiguin Island. You would\n        need about 2 days for this as it takes about 4 hours to get there. You\n        would need to drive to the port and then take a ferry.\n      </p>\n      <p>\n        I would suggest to google a few places to go to if you’re planning on\n        staying in CDO for a few days.\n      </p>\n      <div class=\"ornament-bottom\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/faq/faq.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/faq/faq.component.ts ***!
  \*************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/components/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/components/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/components/guests/guests.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/guests/guests.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/guests/guests.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/guests/guests.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Banner -->\n<section class=\"bg-c py-5\">\n  <div class=\"vertical-align py-5\">\n    <div class=\"vertical-align-item\">\n      <div class=\"container text-center fade-in\">\n        <h2 class=\"text-xl text-white text-capitalize mb-0\">\n          Guest List\n        </h2>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End Banner -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-8 offset-lg-3 offset-md-2\">\n      <div class=\"ornament-top\"></div>\n      <p>\n        We would like to spend as much time as possible with our closest family\n        and friends - thanks for understanding for not bringing a guest.\n      </p>\n      <p>\n        Please find your name below. Upon entry, please show this site as a\n        proof of invitation.\n      </p>\n      <div class=\"ornament-bottom\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/guests/guests.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/guests/guests.component.ts ***!
  \*******************************************************/
/*! exports provided: GuestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestsComponent", function() { return GuestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GuestsComponent = /** @class */ (function () {
    function GuestsComponent() {
    }
    GuestsComponent.prototype.ngOnInit = function () {
    };
    GuestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-guests',
            template: __webpack_require__(/*! ./guests.component.html */ "./src/app/components/guests/guests.component.html"),
            styles: [__webpack_require__(/*! ./guests.component.css */ "./src/app/components/guests/guests.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GuestsComponent);
    return GuestsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Banner -->\n<section class=\"bg-a py-5\">\n  <div class=\"vertical-align py-5\">\n    <div class=\"vertical-align-item\">\n      <div class=\"container text-center fade-in\">\n        <h2 class=\"text-xl text-white text-capitalize mb-0\">\n          Eat, Drink & Be Married\n        </h2>\n        <p class=\"text-md text-white text-capitalize mb-0\">\n          Wednesday 8<sup>th</sup> April 2020 | 4pm\n        </p>\n        <!-- <p class=\"text-xs font-italic text-white\">\n          yes it’s an infinity date\n        </p> -->\n        <!-- <h5 class=\"text-lg text-white text-capitalize mb-0\">\n          <a href=\"http://priderockcdo.com/cove/\" target=\"_blank\"\n            >Cove Garden Resort</a\n          >, Cagayan De Oro\n        </h5> -->\n        <p class=\"text-md text-white text-capitalize mb-0\">\n          Cove Garden Resort, Cagayan De Oro\n        </p>\n        <!-- <div class=\"col-md-10 mx-auto\">\n          <p class=\"text-md text-white text-capitalize\">\n            Thank you all for accepting our invitation and sharing this special\n            day with us. We are delighted to be spending this day with our\n            closest family and friends. If you’re reading this now then yes\n            you’re one of them…. Don’t you feel special\n          </p>\n        </div> -->\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End Banner -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-8 offset-lg-3 offset-md-2\">\n      <div class=\"ornament-top\"></div>\n      <!-- <h2 class=\"text-center mb-0\">Wednesday 8th April 2020</h2>\n      <p class=\"text-center font-italic text-xs\">\n        yes it’s an infinity date\n      </p>\n      <h5 class=\"text-center\">\n        <a href=\"http://priderockcdo.com/cove/\" target=\"_blank\"\n          >Cove Garden Resort</a\n        >, Cagayan De Oro\n      </h5>\n      <h5 class=\"text-center\">4pm Garden Ceremony</h5> -->\n      <p>\n        Thank you all for accepting our invitation and sharing this special day\n        with us. We are delighted to be spending this day with our closest\n        family and friends. If you’re reading this now then yes you’re one of\n        them…. Don’t you feel special\n      </p>\n      <p>\n        The room we booked is called the Pavillion. This is where the reception\n        will take place.\n      </p>\n      <p>\n        Please be punctual as we are on strict schedule….unless you’re the\n        bride, she can be late (its traditional)\n      </p>\n      <p>\n        Times for the entourage may vary but we shall keep you guys/gals\n        updated.\n      </p>\n      <p>\n        There will be entrees and drinks provided after the garden ceremony.\n      </p>\n      <hr />\n      <h3 class=\"text-center\">Gifts</h3>\n      <p>\n        Ohhh the exciting part for us. Well not really. We don’t really require\n        any gifts. Your presence is our gift.\n      </p>\n      <p>\n        We will be travelling and we are restricted with our baggage allowance\n        so we would politely appreciate if you avoid giving us presents.\n        Although contributing towards our future honeymoon, general holidays,\n        rent, mortgage, house and lot etc will be appreciated. (Just joking of\n        course)\n      </p>\n      <hr />\n      <h3 class=\"text-center\">Finally...</h3>\n      <p>\n        If you require any more information then feel free to message us.\n        However, please be patient with us as we are busy planning this eventful\n        day and have working busy schedules.\n      </p>\n      <p>\n        We are both excited to see you all there and celebrate this memorable\n        day with you all.\n      </p>\n      <div class=\"ornament-bottom\"></div>\n    </div>\n  </div>\n</div>\n<!-- section background image -->\n<section class=\"bg-b py-5\">\n  <div class=\"vertical-align py-5\">\n    <div class=\"vertical-align-item\">\n      <div class=\"container text-center\">\n        <h3 class=\"text-lg text-white text-capitalize mb-0\">#Alfie&Han2020</h3>\n        <h3 class=\"text-lg text-white text-capitalize mb-0\">\n          #ToInfiniTutsAndBeHan\n        </h3>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/nav/nav.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fluid header\" style=\"background-image: url('assets/img/header.jpg')\" -->\n<div class=\"container-fluid header\">\n  <h1 class=\"text-center text-capitalize pt-3 mb-0\">Hannah & Alfie</h1>\n  <nav class=\"navbar navbar-expand navbar-light my-0 py-0\">\n    <div class=\"container\">\n      <ul class=\"navbar-nav col-12 justify-content-center\">\n        <li\n          class=\"nav-item\"\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{ exact: true }\"\n        >\n          <a class=\"nav-link\" routerLink=\"/\">Hello </a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n          <a class=\"nav-link\" routerLink=\"/guests\">Guests </a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n          <a class=\"nav-link\" routerLink=\"/dress-code\">Dress Code </a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n          <a class=\"nav-link\" routerLink=\"/faq\">FAQs </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group sticky-top\">\n  <a href=\"#\" routerLink=\"/\" class=\"list-group-item list-group-item-action\">Home</a>\n  <a href=\"#\" routerLink=\"/about\" class=\"list-group-item list-group-item-action\">About</a>\n  <a href=\"#\" routerLink=\"/services\" class=\"list-group-item list-group-item-action\">Services</a>\n</div>"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nbagonoc/Documents/code/angular/ng-wed/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map