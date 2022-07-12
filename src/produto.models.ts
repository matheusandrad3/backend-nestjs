import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Produto extends Model <Produto> {

    @Column({
        type:DataType.DECIMAL(10),
        allowNull: false,

    })

   quantidade:number;

    @Column({
        type:DataType.STRING,
        allowNull: false,

    })
    nome:string;

    @Column({
        type:DataType.DECIMAL(10,2),
        allowNull: false,
    })
    preco:number;

    
}

