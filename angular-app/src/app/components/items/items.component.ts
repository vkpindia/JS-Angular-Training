import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  pageTitle:string = 'Item List Page';
  itemListData: any[] = [];
  item: string ='';
  slectedIndex:any;
  constructor() { }

  ngOnInit(): void {
    this.itemListData = [
      {
        id: 1,
        name: 'Apple'
       },
      {
        id: 2,
        name: 'Banana'
       },
      {
        id: 3,
        name: 'Orange'
       },
      {
        id: 4,
        name: 'Pine Apple'
       },
      {
        id: 5,
        name: 'Grapes'
       }
    ]
  }


  makeItemActive(index:number){
    console.log('this.slectedIndex prev', this.slectedIndex);
    this.slectedIndex = index;
    console.log('this.slectedIndex currnt', this.slectedIndex);
  }

  addItem(){
    this.itemListData.push({id:this.itemListData.length-1, name: this.item});
  }

  deleteItem(index:number){
    this.itemListData.splice(index, 1);
  }

}
