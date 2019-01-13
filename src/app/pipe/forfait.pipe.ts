import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ForfaitPipe' })
export class ForfaitPipe implements PipeTransform { 

    
    transform(value: boolean):string {

        if (value != null) {
            if ( value == true ) {
                return 'Forfait';
            } else {
                return '';
            }
        } else {
            return '';
        }
    
    }

}