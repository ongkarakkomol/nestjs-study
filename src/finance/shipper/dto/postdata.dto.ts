import { IsNotEmpty } from "class-validator";

export class ShipperPostUnPaidDTO {
  @IsNotEmpty()
  orderby: string;

  @IsNotEmpty()
  dateto: string;

  @IsNotEmpty()
  datefrom: string;

  work_code?: string;

  shiper_name?: string;

  shiper_code?: string;

  @IsNotEmpty()
  page: number;

  @IsNotEmpty()
  perpage: number;
}
