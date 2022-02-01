import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-directive',
  templateUrl: './component-directive.component.html',
  styleUrls: ['./component-directive.component.scss']
})
export class ComponentDirectiveComponent implements OnInit {
  public lessions: Array<{name: string}>;
  /*
    @Input()
    @ViewChild()
  */
  constructor() {
    this.lessions = [{name: 'Lession1'},{name: 'Lession2'}, {name:'Lession3'}];
  }

  ngOnInit(): void {
  }

}
