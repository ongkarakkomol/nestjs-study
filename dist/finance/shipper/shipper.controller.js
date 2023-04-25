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
exports.ShipperController = void 0;
const common_1 = require("@nestjs/common");
const shipper_service_1 = require("./shipper.service");
let ShipperController = class ShipperController {
    constructor(ShipperService) {
        this.ShipperService = ShipperService;
    }
    getDataTable(data, type) {
        switch (type) {
            case "getUnpaid":
                const ShipperPostUnPaidDTO = data;
                return this.ShipperService.findUnpaid(data);
            case "getInvoice":
                return this.ShipperService.findUnpaid(data);
            case "getInvoiceGroup":
                return this.ShipperService.findUnpaid(data);
            case "getBillingNote":
                return this.ShipperService.findUnpaid(data);
            case "getBillingNoteGroup":
                return this.ShipperService.findUnpaid(data);
            case "getPaid":
                return this.ShipperService.findUnpaid(data);
            case "getPaidGroup":
                return this.ShipperService.findUnpaid(data);
            default:
                break;
        }
    }
};
__decorate([
    (0, common_1.Post)(":type"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("type")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ShipperController.prototype, "getDataTable", null);
ShipperController = __decorate([
    (0, common_1.Controller)("finance/shipper"),
    __metadata("design:paramtypes", [shipper_service_1.ShipperService])
], ShipperController);
exports.ShipperController = ShipperController;
//# sourceMappingURL=shipper.controller.js.map