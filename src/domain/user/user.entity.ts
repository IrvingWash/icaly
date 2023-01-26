import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from 'typeorm';

import { Exclude } from 'class-transformer';

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	public id: number;

	@Column({ unique: true })
	public username: string;

	@Exclude()
	@Column()
	public password: string;

	@Exclude()
	@Column({ nullable: true })
	public refreshToken: string;
}
