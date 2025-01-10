import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appCvvDirective]',
  standalone: true
})
export class CvvDirectiveDirective {

  private element = inject(ElementRef)

  @HostListener('input', ['$event'])
  onInput(event: any): void {
    const input = this.element.nativeElement;

    let value = input.value.replace(/\D/g, '')

      if (value.length > 4) {
          value = value.substring(0 , 4)
      }

      input.value = value
  }

}
