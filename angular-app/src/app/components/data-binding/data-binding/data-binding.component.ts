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
  imageData: any = {};
  imageName: string = 'camera';
  images: Array<imageT> = [
    {
      name: 'camera', altText: 'Source not found', desc: 'Camera 1'
    },
    {
      name: 'camera1', altText: 'Source not found', desc: 'Camera 2'
    },
    {
      name: 'camera2', altText: 'Source not found'
    },
    {
      name: 'camera3', altText: 'Source not found', desc: 'Camera 4'
    },
    {
      name: 'camera4', altText: 'Source not found'
    },
    {
      name: 'camera6', altText: 'Source not found', desc: 'Camera 6'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.getImageIndex(this.imageName);
  }

  getUpdatedData(){

  }

  getImageIndex(imageName: string){
    let index = this.images.findIndex(item=> item.name == imageName);
    this.imageData = this.images[index];
  }
}
