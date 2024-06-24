import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  @IsNotEmpty()
  username: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  nickname: string;

  @Column()
  age: number;
}
