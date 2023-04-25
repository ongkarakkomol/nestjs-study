"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipperService = void 0;
const common_1 = require("@nestjs/common");
let ShipperService = class ShipperService {
    findUnpaid(data) {
        return [
            {
                code: "1000",
                data: [
                    {
                        work_code: "FTL23010001",
                        shipper_name: "บริษัท เอส พี เอ็กซ์ จำกัด",
                        shipper_profile_type: "corporation",
                        shipper_payment_type: "credit",
                        shipper_project_name: "โครงการขวดรีไซเคิล",
                        matching_date: "2023-01-01 12:00:00",
                        work_status: "เสร็จสิ้น",
                        work_date: "2023-01-01 12:00:00",
                        shipper_freight_before_tax: 1500,
                        carrier_freight_before_tax: 1000,
                        shipper_freight_tax: 15,
                    },
                ],
                description: "OK",
            },
        ];
    }
};
ShipperService = __decorate([
    (0, common_1.Injectable)()
], ShipperService);
exports.ShipperService = ShipperService;
//# sourceMappingURL=shipper.service.js.map