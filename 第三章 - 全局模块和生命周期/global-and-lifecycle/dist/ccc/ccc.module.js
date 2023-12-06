"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CccModule = void 0;
const common_1 = require("@nestjs/common");
const ccc_service_1 = require("./ccc.service");
const ccc_controller_1 = require("./ccc.controller");
let CccModule = class CccModule {
    onApplicationBootstrap() {
        console.log('CccModule onApplicationBootstrap');
    }
    onModuleInit() {
        console.log('CccModule onModuleInit');
    }
    OnModuleInit() {
        console.log('OnModuleInit');
    }
    OnApplicationBootstrap() {
        console.log('OnModuleInit');
    }
};
exports.CccModule = CccModule;
exports.CccModule = CccModule = __decorate([
    (0, common_1.Module)({
        controllers: [ccc_controller_1.CccController],
        providers: [ccc_service_1.CccService],
    })
], CccModule);
//# sourceMappingURL=ccc.module.js.map