import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('accounts')
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  first_name: string;

  @Column({ length: 100 })
  last_name: string;

  @Column({ length: 255, unique: true })
  email: string;

  @Column({ length: 255 })
  password_hash: string;

  @Column({ default: false })
  is_verified: boolean;

  @Column({ length: 50, default: 'ACTIVE' })
  status: string;

  @Column({ default: 0, select: false })
  failed_login_attempts: number;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;
}
