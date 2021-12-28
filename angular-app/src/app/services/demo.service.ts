import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DemoService {

  constructor() { }

  getCustomerData(): any[]{
    return [
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
  }

  validateUser(username:string, password:string): string{
    let message = ''
    if(username==='admin' && password==='admin@123'){
      message = `Welcome to ${username}`;
    } else {
      alert('Please enter correct credentials!!');
      message = '';
    }
    return message;
  }
}
