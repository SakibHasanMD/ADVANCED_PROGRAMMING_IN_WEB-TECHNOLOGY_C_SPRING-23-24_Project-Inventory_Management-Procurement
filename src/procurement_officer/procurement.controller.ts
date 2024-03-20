import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { ProcurementService } from "./procurement.services";
import { ProcurementDTO } from "./DTO/procurement.dto";


@Controller('procurement')
export class ProcurementController{
    constructor(private readonly procurementService: ProcurementService){}
  
    @Get('users/:id')
    getUsersById(@Param('id') id: string): object{
        return this.procurementService.getUsersById(id);
    }

    @Get('users/')
    getUsersByNameAndId(@Query('name') name: string, 
    @Query('id') id:string) : object{
        return this.procurementService.getUsersByNameAndId(name, id);
    }

    @Post('updateprofile')
    @UsePipes(new ValidationPipe)
    async updateUser(@Body() myobj: ProcurementDTO): Promise<ProcurementDTO>{
        console.log(myobj.name);
        return this.procurementService.updateUser(myobj);
    }
   
}