import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Folder {
    @PrimaryGeneratedColumn('uuid');
    id: string;
    @Column()
    name: string;
    @Column({nullable: true})
    description: string;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
}
