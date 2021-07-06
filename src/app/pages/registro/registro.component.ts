import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  myForm:FormGroup
  mensaje="";
  
  //fb:FormBuilder=new FormBuilder()
  constructor(
    private fb:FormBuilder
  ) { 
    this.myForm=this.fb.group({
      name:["",[Validators.required]],
      lastname:["",[Validators.required]],
      phone:["",Validators.pattern(/^[0-9]\d*$/)],
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(6),,Validators.maxLength(10)]],
    })
  }
  registrarse(){
    console.log(this.myForm.value)
  }

  exitoRegis(){
    this.mensaje="¡Gracias por registarse!"
    

   }

  ngOnInit(): void {
  }

}

