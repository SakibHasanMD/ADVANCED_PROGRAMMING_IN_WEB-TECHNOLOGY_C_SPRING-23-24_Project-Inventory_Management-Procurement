export class PurchaseOrderDto {
    orderNumber: string;
    supplierId: number;
    status: string;
    totalAmount: number;
    orderDate: Date;
    deliveryDate: Date;
  }