import {
  Directive,
  ElementRef, HostListener, Input, OnInit, Renderer2
} from '@angular/core';
@Directive({
  selector: '[appMaskInputDate]',
})
export class MaskInputDateDirective implements OnInit {
  @Input() appMaskValue: string | undefined;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void { }
  @HostListener('keyup', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    // console.log(event);



    if (
      this.appMaskValue &&
      (this.appMaskValue.length == 2 || this.appMaskValue.length == 5) &&
      event.key !== 'Backspace'
    ) {
      this.renderer.setProperty(
        this.elRef.nativeElement,
        'value',
        this.appMaskValue + '/'
      );
    }
  }
}
