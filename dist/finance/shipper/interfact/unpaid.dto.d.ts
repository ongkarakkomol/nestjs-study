export interface shipperUnpaidDTO {
    code: string;
    data: ShipperUnpaidDataDto[];
    description: string;
}
export interface ShipperUnpaidDataDto {
    work_code: string;
    shipper_name: string;
    shipper_profile_type: string;
    shipper_payment_type: string;
    shipper_project_name: string;
    matching_date: string;
    work_status: string;
    work_date: string;
    shipper_freight_before_tax: number;
    carrier_freight_before_tax: number;
    shipper_freight_tax: number;
}
