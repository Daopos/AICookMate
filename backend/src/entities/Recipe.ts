import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'recipes' })
export class Recipe {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ nullable: false })
  title!: string;

  @Column({ nullable: false })
  AIGenerated!: string;
}
