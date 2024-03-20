import { Injectable } from "@nestjs/common";
import { ProcurementDTO } from "./DTO/procurement.dto";
import { ProcurementEntity } from "./procurement.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class ProcurementService{
constructor(@InjectRepository(ProcurementEntity) private procurementReposetory: Repository<ProcurementEntity>){}  
    async updateUser(myobj:ProcurementDTO):Promise<ProcurementDTO>{
        console.log(myobj.name);
        return myobj;
    
    }
    getUsersById(id: string): object {
        return {massage: "Your id is" + id};
        
    }
    getUsersByNameAndId(name: string, id: string): object{
        return {message: "You id is " + name +
         " and your id is " + id};
    
    }

    async createUser(user: ProcurementEntity): Promise<ProcurementEntity> {
        return await this.procurementReposetory.save(user);
    }

    async removeUserById(userId: number): Promise<void> {
        await this.procurementReposetory.delete(userId);
    }

    async getUsersWithFullName(): Promise<ProcurementEntity[]> {

        return await this.procurementReposetory.find({ where: { fullName: null } });
    }

    // async updatePhoneNumber(id: number, user: ProcurementEntity): Promise<ProcurementEntity> {
    //     await this.procurementReposetory.update(id,this.updatePhoneNumber);
    //     return  this.procurementReposetory.findOneBy({id:id});
    // }

 

 
    
    
    }
