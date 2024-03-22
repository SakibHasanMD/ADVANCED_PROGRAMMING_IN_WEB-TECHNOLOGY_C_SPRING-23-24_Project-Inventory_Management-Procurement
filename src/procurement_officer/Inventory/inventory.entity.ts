import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InventoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  itemName: string;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @Column()
  unitPrice: number;
}
