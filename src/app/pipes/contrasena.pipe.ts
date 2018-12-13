import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'contrasena'
})

export class ContrasenaPipe implements PipeTransform {

    transform( value: string, activa: boolean = true ): string {
        if( activa ) {
            return '*'.repeat( value.length );
        } else {
            return value;
        }
    }

}