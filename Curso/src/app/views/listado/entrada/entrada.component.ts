import { Component, Input, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces';
import { EntradaService } from 'src/app/shared/services/entrada.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit{
  @Input()
  public entrada!: any;

  constructor(){}
  ngOnInit(): void {
  }


}
