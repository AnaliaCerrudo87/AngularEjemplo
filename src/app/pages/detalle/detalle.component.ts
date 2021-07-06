import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  loading=true;
  producto;
  titulo="";
  modificado=false;
  constructor(
    private activateRoute:ActivatedRoute,
    private productosService: ProductoService
    ) {

    
   }

   comprar(){
    this.titulo="¡Gracias por su compra!"
    this.modificado=true

   }

  async ngOnInit() {
    try{

    const id=this.activateRoute.snapshot.paramMap.get("id")
    this.producto=await this.productosService.getById(id)
    this.loading=false;
    }
    catch(error){}
  }

}
