import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({

    //que cosas continen ese modulo
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],

    //lo q sea visible fuera del modulo
    //que quiero hacer visible publica fuera de ese modulo 
    exports:[
        ListadoComponent
    ],

    //aqui adentro van modulos (objetos que se ponen en los imbolos)
    imports:[
        CommonModule
    ]

})
export class HeroesModule{

}