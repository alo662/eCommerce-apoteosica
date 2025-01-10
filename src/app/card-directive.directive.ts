import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[FormatCardInput]',
  standalone: true
})
export class FormatCardDirective {

  constructor(private element: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: any): void {
    const input = this.element.nativeElement;
    console.log('IN');
    let value = input.value.replace(/\D/g, '');
    if (value.length > 16) {
      value = value.substring(0, 16);
    }

    value = value.replace(/(.{4})(?=.)/g, '$1 ');
    input.value = value;
  }
}
