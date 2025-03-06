import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({ unique: true, nullable: false, length: 30 })
    username: string;
    @Column({ unique: true, nullable: false, length: 100 })
    email: string;
    @Column({ nullable: false })
    password: string;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
}

