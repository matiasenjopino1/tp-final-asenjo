import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descuentoPipe',
  standalone: false,
})
export class DescuentoPipePipe implements PipeTransform {
   transform(precio:number,porcentaje:number): number {
    if (!precio || isNaN(precio) ) {
      return 0;
    }
    if(!porcentaje || isNaN(porcentaje) || porcentaje <= 0 ){
      return precio
    }
    const descuento = precio * (porcentaje / 100)
    return precio - descuento
  }
}
