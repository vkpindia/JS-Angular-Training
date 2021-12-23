import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBgColor]'
})
export class BgColorDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  setBgColor(color: string){
    this.renderer.setStyle(
      this.el.nativeElement,
      'backgroundColor',
       color
    )
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.setBgColor('yellow')
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.setBgColor('blue')
  }

}
