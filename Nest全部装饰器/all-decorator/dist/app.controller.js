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
const test_filter_1 = require("./test.filter");
const test_guard_1 = require("./test.guard");
let AppController = class AppController {
    constructor(appservice) {
        this.appservice = appservice;
    }
    getHello() {
        console.log(this.guang);
        throw new common_1.HttpException('xxx', common_1.HttpStatus.BAD_REQUEST);
        return this.appService.getHello();
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Inject)(app_service_1.AppService),
    __metadata("design:type", app_service_1.AppService)
], AppController.prototype, "appService", void 0);
__decorate([
    (0, common_1.Optional)(),
    (0, common_1.Inject)('Guang'),
    __metadata("design:type", Object)
], AppController.prototype, "guang", void 0);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseFilters)(test_filter_1.AaaFilter),
    (0, common_1.UseGuards)(test_guard_1.AaaGuard),
    (0, common_1.SetMetadata)('roles', ['admin']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    (0, common_1.SetMetadata)('roles', ['user']),
    __param(0, (0, common_1.Optional)()),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map