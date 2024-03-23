import { Body, Controller, Get, Param, Patch, Post, Query, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { ProcurementService } from "./procurement.services";
import { ProcurementDTO } from "./DTO/procurement.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { MulterError, diskStorage } from "multer";


@Controller('procurement')
export class ProcurementController{
    constructor(private readonly procurementService: ProcurementService){}
  
    
    @Get('viewprofile')
    getProfile() {
        return this.procurementService.viewProfile();
    }

    // @Post('updateprofile')
    // @UsePipes(new ValidationPipe)
    // async updateUser(@Body() userinfo: ProcurementDTO): Promise<ProcurementDTO>{
    //     return this.procurementService.updateUser(userinfo);
    // }

    @Patch('updateprofile')
    @UseInterceptors(FileInterceptor('myfile',
        {
            fileFilter: (req, file, cb) => {
                if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
                    cb(null, true);
                else {
                    cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
                }
            },
            limits: { fileSize: 30000 },
            storage: diskStorage({
                destination: './uploads',
                filename: function (req, file, cb) {
                    cb(null, Date.now() + file.originalname)
                },
            })
        }
    ))
    @UsePipes(new ValidationPipe)
    async addUser(@Body() updatedInfo: ProcurementDTO, @UploadedFile() myfile: Express.Multer.File): Promise<ProcurementDTO> {
        updatedInfo.profilePicture = myfile.filename;
        return this.procurementService.updateUser(updatedInfo);
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