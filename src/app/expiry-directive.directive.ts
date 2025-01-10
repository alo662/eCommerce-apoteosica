import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appExpiryDirective]',
  standalone: true
})
export class ExpiryDirectiveDirective {

  private element = inject(ElementRef)

  @HostListener('input', ['$event'])
  onInput(event: any): void {
    const input = this.element.nativeElement;

    let value = input.value.replace(/\D/g, '')

      if (value.length > 4) {
          value = value.substring(0 , 4)
      }

      if (value.length > 2) {
        value = `${value.substring(0, 2)}/${value.substring(2)}`;
      }

      input.value = value
  }

}
