import { hashSync } from 'bcrypt';
import { Entity, Column, PrimaryGeneratedColumn, Generated, BeforeInsert } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    @Generated('uuid')
    id: string;

    @Column()
    email: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, 10);
    }
}
