import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    
    <h1>{{titulo}}</h1>
    <button (click)="acumular(+1)">+ 1</button>
    <span>{{numero}}</span>
    <button (click)="acumular(-1)"> - 1</button> <b></b>


    <h3>La base es: <strong>{{base}}</strong></h3>
    <button (click)="ac(base)"> {{+base}}</button>
    <span>{{ num}}</span>
    <button (click)="ac(-base)">{{- base}}</button> 
    `
})
export class ContadorComponent{
    titulo: string= 'Contador App';
    numero:number=10;
    base:number=5;
    num:number=10;
    
  
    acumular(valor:number){
      this.numero+=valor;
    }
  
    ac(valor:number)
    {
      this.num+=valor;
    }
  

}