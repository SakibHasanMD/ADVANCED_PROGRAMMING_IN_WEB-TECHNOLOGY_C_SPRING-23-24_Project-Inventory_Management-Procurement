import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { InventoryItemDto } from '../DTO/inventory-item.dto';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get()
  getAllItems(): Promise<InventoryItemDto[]> {
    return this.inventoryService.getAllItems();
  }

  @Get(':id')
  getItemById(@Param('id') id: number): Promise<InventoryItemDto> {
    return this.inventoryService.getItemById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  addItem(@Body() itemDto: InventoryItemDto): Promise<InventoryItemDto> {
    return this.inventoryService.addItem(itemDto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  updateItem(@Param('id') id: number, @Body() itemDto: InventoryItemDto): Promise<InventoryItemDto> {
    return this.inventoryService.updateItem(id, itemDto);
  }

  @Delete(':id')
  deleteItem(@Param('id') id: number): Promise<void> {
    return this.inventoryService.deleteItem(id);
  }
}
