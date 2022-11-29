import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[datepickerMask]'
})
export class DatepickerMaskDirective {

  @Input('datepickerMask') datepickerMaskValue: string | undefined;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void { }
  @HostListener('keyup', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (
      this.datepickerMaskValue &&
      (this.datepickerMaskValue.length == 2 || this.datepickerMaskValue.length == 5) &&
      event.key !== 'Backspace'
    ) {
      this.renderer.setProperty(
        this.elRef.nativeElement,
        'value',
        this.datepickerMaskValue + '/'
      );
    }
  }

}
