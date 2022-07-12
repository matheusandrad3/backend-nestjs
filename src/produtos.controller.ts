import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produto.models";
import { ProdutosService } from "./produtos.service";


@Controller("produtos")
export class ProdutosController{

    constructor(private ProdutosService: ProdutosService){
        
    }


    @Get()
    async obterTodos(): Promise <Produto[]> {
        return this.ProdutosService.obterTodos();
    }

    @Get(":id")
    async obterUm(@Param() params):Promise <Produto>{
        return this.ProdutosService.obterUm(params.id);
    }

    @Post()
    async criar(@Body() produto: Produto){
       this.ProdutosService.criar(produto);
    }

    @Put()
    async alterar(@Body() produto: Produto):Promise <[number, Produto[]]>{
        return this.ProdutosService.alterar(produto);
    }

    @Delete(":id")
    async apagar(@Param() params){
        this.ProdutosService.apagar(params.id);
    }
}
