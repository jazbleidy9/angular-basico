import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {

  heroes:string[]=['Spiderman', 'Iroman','hulk','thor','Grup'];
  heroeBorrado: string='';
borrarHeroe(){
  
  this.heroeBorrado= this.heroes.shift()|| '';
  
}


    //  OnInit---> inicializar cosas como un servicio, se trae la info
  
}
