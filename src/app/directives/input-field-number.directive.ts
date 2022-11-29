import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

/**
 * This directive is used to strict an input to take only number
 */

@Directive({
  selector: 'input[numbersOnly]'
})
export class InputFieldNumberDirective {

  @Output() valueChange = new EventEmitter();
  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: any): any {
    const initialValue = this.el.nativeElement.value;
    const newValue = initialValue.replace(/[^0-9]*/g, '');
    this.el.nativeElement.value = newValue;
    this.valueChange.emit(newValue);
    if ( initialValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
