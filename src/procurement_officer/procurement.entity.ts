import{ Entity , Column, PrimaryGeneratedColumn, BeforeInsert} from 'typeorm';
@Entity("procurement_officer")
export class ProcurementEntity{

    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: true , type:'boolean'})
    isActive: boolean;

    @Column({ nullable: true ,type:'varchar' })
    fullName: string;

    @Column({ type: 'bigint', unsigned: true })
    phone: number;

    @BeforeInsert()
    generateId() {
        this.id=Math.floor(Math.random()*10000)
    }


}