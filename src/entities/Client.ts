import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('Client')
export class Client{

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    fullName: string

    @Column({type: 'text'})
    maritalStatus: string

    @Column({type: 'text'})
    cpf: string

    @Column()
    createDate: Date
    
    @Column()
    birthDate: Date

    @Column({nullable:true})
    lastUpdate: Date
    
}