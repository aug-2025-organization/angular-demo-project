import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class AppHover {
  @Input() appHover!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  changeToNewColor() {
    console.log('mouse entered!!');
    // this.el.nativeElement.style.backgroundColor = 'lightblue';
    this.el.nativeElement.style.backgroundColor = this.appHover;
    // this.renderer.setStyle(
    //   this.el.nativeElement,
    //   'backgroundColor',
    //   this.appHover
    // );
  }

  @HostListener('mouseleave')
  changeToOldColor() {
    console.log('mouse exited!!!');
    this.el.nativeElement.style.backgroundColor = 'initial';
    //this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'initial');
  }
}
