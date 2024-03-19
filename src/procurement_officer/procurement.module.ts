import { Module } from "@nestjs/common";

import { ProcurementController } from "./procurement.controller";
import { ProcurementService } from "./procurement.services";
import { ProcurementEntity } from "./procurement.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({

    imports: [TypeOrmModule.forFeature([ProcurementEntity])],

    controllers: [ProcurementController],

    providers: [ProcurementService],

  })

  export class ProcurementModule {}