"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AaaFilter = void 0;
class AaaFilter {
    catch(exception, host) {
        const response = host.switchToHttp().getResponse();
        response.status(exception.getStatus()).json({
            msg: exception.message
        });
    }
}
exports.AaaFilter = AaaFilter;
//# sourceMappingURL=test.filter.js.map