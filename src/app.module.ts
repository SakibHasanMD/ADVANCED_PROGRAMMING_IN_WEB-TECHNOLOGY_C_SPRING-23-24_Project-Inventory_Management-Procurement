import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProcurementModule } from './procurement_officer/procurement.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseOrderModule } from './procurement_officer/Purchase Orders/purchase-order.module';
import { SupplierModule } from './procurement_officer/Suppliers/supplier.module';

@Module({
  
  imports: [ProcurementModule, PurchaseOrderModule ,SupplierModule ,TypeOrmModule.forRoot({
  type: 'postgres',
  host:'localhost',
  port:5432,
  username:'postgres',
  password:'999999',
  database:'inventory',
  autoLoadEntities:true,
  synchronize:true
})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
