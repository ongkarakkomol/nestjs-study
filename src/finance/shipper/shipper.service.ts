import { Injectable } from "@nestjs/common";
import { ShipperUnpaid } from "./interfact/unpaid.interface";

@Injectable()
export class ShipperService {
  findUnpaid(data): ShipperUnpaid[] {
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
}
