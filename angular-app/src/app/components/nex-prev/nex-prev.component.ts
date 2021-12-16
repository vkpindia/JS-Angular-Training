import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nex-prev',
  templateUrl: './nex-prev.component.html',
  styleUrls: ['./nex-prev.component.scss']
})
export class NexPrevComponent implements OnInit {

  public customers: Array<any> = [];
  public searchString: string = '';
  newCustomer: any = [];
  public n: number = 0;
  public m: number = 1;
  public date = new Date();
  disableButton1 = false;
  disableButton2 = true;

  constructor() { }

  ngOnInit() {
    this.customers = [
      { Name: 'Alfreds Futterkiste', City: 'Berlin', Country: 'Germany', gender: 'M' },
      {
        Name: 'Ana Trujillo Emparedados y helados',
        City: 'México D.F.',
        Country: 'Mexico',
        gender: 'F'
      },
      {
        Name: 'Antonio Moreno Taquería',
        City: 'México D.F.',
        Country: 'Mexico',
        gender: 'F'
      },
      { Name: 'Around the Horn', City: 'London', Country: 'UK', gender: 'M' },
      { Name: "B's Beverages", City: 'London', Country: 'UK', gender: 'M'},
      { Name: 'Berglunds snabbköp', City: 'Luleå', Country: 'Sweden', gender: 'M' },
      { Name: 'Blauer See Delikatessen', City: 'Mannheim', Country: 'Germany', gender: 'F' },
      { Name: 'Blondel père et fils', City: 'Strasbourg', Country: 'France', gender: 'M' },
      { Name: 'Bólido Comidas preparadas', City: 'Madrid', Country: 'Spain', gender: 'F' },
      { Name: "Bon app'", City: 'Marseille', Country: 'France', gender: 'M' },
      { Name: 'Bottom-Dollar Marketse', City: 'Tsawassen', Country: 'Canada', gender: 'M' },
      {
        Name: 'Cactus Comidas para llevar',
        City: 'Buenos Aires',
        Country: 'Argentina',
        gender: 'F'
      },
      {
        Name: 'Centro comercial Moctezuma',
        City: 'México D.F.',
        Country: 'Mexico',
        gender: 'M'
      },
      { Name: 'Chop-suey Chinese', City: 'Bern', Country: 'Switzerland' },
      { Name: 'Comércio Mineiro', City: 'São Paulo', Country: 'Brazil' },
    ];
    // this.newCustomer = this.getCustomerDetail();
  }

/*   getCustomerDetail(n = 0, m = 1) {
    return this.customers.slice(n, m);
  } */

 keyOrder(a: KeyValue<string, unknown>, b: KeyValue<string, unknown>){
    return 0;
  }
/*  keyDescOrder(a: KeyValue<string, unknown>, b: KeyValue<string, unknown>){
    return -1;
  }
 keyAscOrder(a: KeyValue<string, unknown>, b: KeyValue<string, unknown>){
    return 1;
  } */

  public nextItem(): void {
    this.n = this.n + 1;
    this.m = this.m + 1;
    this.disableButton2 = false;
    if (this.m > this.customers.length - 1) {
      // this.n = 0;
      // this.m = 1;
      this.disableButton1 = true;
    }
    // this.newCustomer = this.getCustomerDetail(this.n, this.m);
  }

  public prevItem(): void {
    this.n = this.n - 1;
    this.m = this.m - 1;
    this.disableButton1 = false;
    if (this.n <= 0) {
      // this.m = this.customers.length;
      // this.n = this.m - 1;
      this.disableButton2 = true;
    }
    // this.newCustomer = this.getCustomerDetail(this.n, this.m);
  }

}
