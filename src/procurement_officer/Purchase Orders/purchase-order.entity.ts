import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PurchaseOrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderNumber: string;

  @Column()
  supplierId: number;

  @Column()
  status: string;

  @Column()
  totalAmount: number;

  @Column()
  orderDate: Date;

  @Column()
  deliveryDate: Date;
}
