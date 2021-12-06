import { Component, OnInit } from '@angular/core';
import { staticData } from '../data.enum';
import { imageT } from '../imagetype';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  uname = staticData.uname;
  imageName: string = '';
  images: Array<imageT> = [
    {
      name: 'camera', altText: 'Source not found'
    },
    {
      name: 'camera1', altText: 'Source not found'
    },
    {
      name: 'camera2', altText: 'Source not found'
    },
    {
      name: 'camera3', altText: 'Source not found'
    },
    {
      name: 'camera4', altText: 'Source not found'
    },
    {
      name: 'camera6', altText: 'Source not found'
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

  getUpdatedData() {
    console.log('uname', this.uname);
  }

}
