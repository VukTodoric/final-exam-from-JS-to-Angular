import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appShowError]',
})
export class ShowErrorDirective implements AfterViewInit {
  divEl?: HTMLDivElement;

  @HostListener('input', ['$event']) onInput(event: InputEvent) {
    if (!(event.target as HTMLInputElement).validity.valid) {
      const validationMessage = (event.target as HTMLInputElement)
        .validationMessage;
      this.renderer.addClass(this.divEl, 'alert');
      this.renderer.setProperty(this.divEl, 'innerText', validationMessage);
    } else {
      this.renderer.removeClass(this.divEl, 'alert');
      this.renderer.setProperty(this.divEl, 'innerText', '');
    }
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.divEl = this.renderer.createElement('div');
    this.renderer.appendChild(this.elementRef.nativeElement, this.divEl);
  }
}
