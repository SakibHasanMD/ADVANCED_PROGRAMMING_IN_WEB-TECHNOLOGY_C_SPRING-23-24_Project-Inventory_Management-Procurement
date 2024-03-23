// supplier.controller.ts
import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { SupplierDto } from '../DTO/supplier.dto';
import { SupplierService } from './supplier.service';

@Controller('suppliers')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Get()
  getAllSuppliers(): Promise<SupplierDto[]> {
    return this.supplierService.getAllSuppliers();
  }

  @Get(':id')
  getSupplierById(@Param('id') id: number): Promise<SupplierDto> {
    return this.supplierService.getSupplierById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createSupplier(@Body() supplierDto: SupplierDto): Promise<SupplierDto> {
    return this.supplierService.createSupplier(supplierDto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  updateSupplier(@Param('id') id: number, @Body() supplierDto: SupplierDto): Promise<SupplierDto> {
    return this.supplierService.updateSupplier(id, supplierDto);
  }

  @Delete(':id')
  deleteSupplier(@Param('id') id: number): Promise<void> {
    return this.supplierService.deleteSupplier(id);
  }
}
