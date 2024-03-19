import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProcurementModule } from './procurement_officer/procurement.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  
  imports: [ProcurementModule ,TypeOrmModule.forRoot({
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
