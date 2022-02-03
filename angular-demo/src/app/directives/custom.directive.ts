import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit {

  @Input('appCustom') appCustom: string = ''

  @HostBinding('style.backgroundColor') bgColor: string='';
  @HostBinding('style.color') color: string='';
  @HostBinding('attr.value') value: string='';

  constructor() {

   }

   ngOnInit(): void {
    // console.log('appCustom', this.appCustom);
     // Before binding value remove ngModel if that is used
    if(this.appCustom=='input'){
        this.value = "Scott";
    }
   }

  @HostListener('mouseenter')
  onEnter(){
    if(this.appCustom!='input'){
      this.bgColor = 'yellow';
      this.color = '#f00';
    }
  }

  @HostListener('mouseleave')
  onLeave(){
    if(this.appCustom!='input'){
      this.bgColor = '#000';
      this.color = '#fff';
    }
  }

}
