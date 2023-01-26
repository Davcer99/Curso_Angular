import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces';
import { EntradaService } from 'src/app/shared/services/entrada.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listadoEntradas: any;

  constructor(private entradaService: EntradaService){

  }

  ngOnInit(): void {
    this.recuperarEntradas();
  }

  /**
   * mostrarTitulo
   */
  public mostrarTitulo( titulo:string):void {
    alert(`Entrada seleccionada: ${titulo}.`);
  }

  private recuperarEntradas(): void{
    this.entradaService.recuperarEntradas().subscribe(
      (data)=>{
        /* Esta función se ejecuta si el get es correcto */
        this.listadoEntradas = data;
      },
      (error)=>{
        /* Esta fucnicón se ejecuta si hay algun error */
      },
      ()=>{
        /* Esta función se ejecuta al terminar la peticion */
      }
    )
  }
}
