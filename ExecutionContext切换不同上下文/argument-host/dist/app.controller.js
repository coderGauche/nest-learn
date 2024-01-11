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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const aaa_guard_1 = require("./aaa.guard");
const aaa_decorator_1 = require("./aaa.decorator");
const bbb_decorator_1 = require("./bbb.decorator");
const ccc_decorator_1 = require("./ccc.decorator");
const MyHeaders_decorator_1 = require("./MyHeaders.decorator");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    getHello2() {
        return this.appService.getHello();
    }
    getHello3() {
        return this.appService.getHello();
    }
    getHello4(c) {
        return c;
    }
    getHello5(Headers1, heders2) {
        console.log('header', Headers1);
        console.log('header2', heders2);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.SetMetadata)('aaa', 'admin'),
    (0, common_1.UseGuards)(aaa_guard_1.AaaGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('hello'),
    (0, aaa_decorator_1.Aaa)('admin'),
    (0, common_1.UseGuards)(aaa_guard_1.AaaGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello2", null);
__decorate([
    (0, bbb_decorator_1.Bbb)('hello1', 'admin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello3", null);
__decorate([
    (0, common_1.Get)('hello2'),
    __param(0, (0, ccc_decorator_1.Ccc)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHello4", null);
__decorate([
    (0, common_1.Get)('hello3'),
    __param(0, (0, common_1.Headers)('Accept')),
    __param(1, (0, MyHeaders_decorator_1.MyHeaders)('Accept')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHello5", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map