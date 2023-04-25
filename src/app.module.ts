import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ShipperModule } from "./finance/shipper/shipper.module";
import { CarrierModule } from "./finance/carrier/carrier.module";

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ShipperModule, CarrierModule],
})
export class AppModule {}
