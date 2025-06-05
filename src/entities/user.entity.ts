import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserTypes } from '../types/user-types.enum';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ type: 'varchar', length: 100 })
  firstname!: string;
  @Column({ type: 'varchar', length: 100 })
  lastname!: string;
  @Column({ type: 'varchar', length: 100, unique: true })
  username!: string;
  @Column({ type: 'varchar', length: 255 })
  password!: string;
  @Column({ type: 'enum', enum: UserTypes, default: UserTypes.USER })
  usertype!: UserTypes;
  @Column({ type: 'boolean', default: true })
  isActive!: boolean;
  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;
  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt?: Date;
}
