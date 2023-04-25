// import { Controller, Get, Param } from "@nestjs/common";
import { Controller, Post, Body, Param } from "@nestjs/common";
import { ShipperService } from "./shipper.service";
import { ShipperPostUnPaidDTO } from "./dto/postdata.dto";

@Controller("finance/shipper")
export class ShipperController {
  constructor(private ShipperService: ShipperService) {}

  // @Get(":type")
  @Post(":type")
  getDataTable(@Body() data: any, @Param("type") type: string) {
    switch (type) {
      case "getUnpaid":
        const ShipperPostUnPaidDTO: ShipperPostUnPaidDTO = data;
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
}
