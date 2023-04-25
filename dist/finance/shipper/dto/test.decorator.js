"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
const common_1 = require("@nestjs/common");
exports.Test = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});
//# sourceMappingURL=test.decorator.js.map