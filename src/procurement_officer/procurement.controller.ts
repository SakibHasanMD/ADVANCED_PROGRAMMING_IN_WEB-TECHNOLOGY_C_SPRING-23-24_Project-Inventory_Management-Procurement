import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { ProcurementService } from "./procurement.services";
import { ProcurementDTO } from "./DTO/procurement.dto";


@Controller('procurement')
export class ProcurementController{
    constructor(private readonly procurementService: ProcurementService){}
  
    
    @Get('viewprofile')
    getProfile() {
        // Retrieve procurement officer's profile
        return this.procurementService.viewProfile();
    }

    @Post('updateprofile')
    @UsePipes(new ValidationPipe)
    async updateUser(@Body() userinfo: ProcurementDTO): Promise<ProcurementDTO>{
        return this.procurementService.updateUser(userinfo);
    }

    //Old LabTask Codes
    // @Get('users/:id')
    // getUsersById(@Param('id') id: string): object{
    //     return this.procurementService.getUsersById(id);
    // }

    // @Get('users/')
    // getUsersByNameAndId(@Query('name') name: string, 

    
    // @Query('id') id:string) : object{
    //     return this.procurementService.getUsersByNameAndId(name, id);
    // }
   
}