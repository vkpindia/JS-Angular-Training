import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAddClass]'
})
export class AddClassDirective implements OnInit{

  @Input() appAddClass:any;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.appAddClass;
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.el.nativeElement.classList.add('delete');
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.el.nativeElement.classList.remove('delete');
  }

}
