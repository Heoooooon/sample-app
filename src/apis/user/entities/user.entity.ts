import {
  BaseEntity,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ engine: 'InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'uid' })
  uid: string;

  @Column({ name: 'name', length: 13 })
  name: string;

  @Column({ name: 'email', length: 60 })
  @Index()
  email: string;

  @Column({ name: 'password', length: 100 })
  pw: string;

  @Column({ name: 'nick_name', length: 50 })
  nickName: string;
}
