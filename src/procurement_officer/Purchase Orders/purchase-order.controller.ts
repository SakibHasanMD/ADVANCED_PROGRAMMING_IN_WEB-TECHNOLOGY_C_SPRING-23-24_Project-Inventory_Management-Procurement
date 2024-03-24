import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { PurchaseOrderService } from './purchase-order.service';
import { PurchaseOrderDto } from '../DTO/purchase-order.dto';

@Controller('purchase-orders')
export class PurchaseOrderController {
  constructor(private readonly purchaseOrderService: PurchaseOrderService) {}

  @Get()
  getAllPurchaseOrders(): Promise<PurchaseOrderDto[]> {
    return this.purchaseOrderService.getAllPurchaseOrders();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createPurchaseOrder(@Body() purchaseOrderDto: PurchaseOrderDto): Promise<PurchaseOrderDto> {
    return this.purchaseOrderService.createPurchaseOrder(purchaseOrderDto);
  }

  @Get(':id')
  getPurchaseOrderById(@Param('id') id: number): Promise<PurchaseOrderDto> {
    return this.purchaseOrderService.getPurchaseOrderById(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  updatePurchaseOrder(@Param('id') id: number, @Body() purchaseOrderDto: PurchaseOrderDto): Promise<PurchaseOrderDto> {
    return this.purchaseOrderService.updatePurchaseOrder(id, purchaseOrderDto);
  }

  @Delete(':id')
  deletePurchaseOrder(@Param('id') id: number): Promise<void> {
    return this.purchaseOrderService.deletePurchaseOrder(id);
  }

  @Get('getbysupplierid/:id')
  async getPurchaseOrder(@Param('id') id: number) {
    return this.purchaseOrderService.getPurchaseOrderWithSupplier(id);
  }
}
