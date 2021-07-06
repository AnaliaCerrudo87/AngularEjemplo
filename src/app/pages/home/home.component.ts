import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../servicios/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titulo="nombre_persona"
  modificado=false
  productos:any=[]
  productoAsync;
  
    
  
  constructor(private productosService:ProductoService) { 
    this.getProductos()
  
  }

  cambiarTitulo(){

    this.titulo="Bienvenid@ al curso de Angular"
    this.modificado=true;
  }

  async getProductos(){
    /*this.productosService.getAllPromise()
    .then(data=>{
      console.log(data)
      this.productos=data
    })*/
    try{
      this.productos = await this.productosService.getAllPromise()
      //this.productoAsync = this.productosService.getAllPromise()
      this.productoAsync = this.productosService.getAll()
    }catch(e){
      console.log(e)
    }
    
  }
  ngOnInit(): void {
  }

}
