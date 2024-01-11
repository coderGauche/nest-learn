"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyHeaders = void 0;
const common_1 = require("@nestjs/common");
exports.MyHeaders = (0, common_1.createParamDecorator)((key, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return key ? request.headers[key.toLowerCase()] : request.headers;
});
//# sourceMappingURL=MyHeaders.decorator.js.map