import { ShipperService } from "./shipper.service";
export declare class ShipperController {
    private ShipperService;
    constructor(ShipperService: ShipperService);
    getDataTable(data: any, type: string): import("./interfact/unpaid.interface").ShipperUnpaid[];
}
