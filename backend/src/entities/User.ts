import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Recipe } from './Recipe';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ nullable: false })
  name!: string;

  @Column({ nullable: false })
  email!: string;

  @Column({ nullable: false })
  password!: string;

  @Column({ nullable: true })
  provider_id!: string;

  @Column({ nullable: true })
  provider!: string;

  @Column({ default: 'user' })
  role!: string;

  @OneToMany(() => Recipe, (recipe) => recipe.user)
  recipes!: Recipe[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
