import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true, 
  name: 'customPipe'
})
export class CustomPipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase(); // Transforma el texto a mayúsculas
  }
}
