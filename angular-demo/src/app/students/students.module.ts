import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { GenderPipe } from '../pipes/gender.pipe';
import { FilterPipe } from '../pipes/filter.pipe';
import { TitlePrefixPipe } from '../pipes/title-prefix.pipe';


@NgModule({
  declarations: [
    StudentListComponent,
    GallaryComponent,
    ProductComponent,
    GenderPipe,
    FilterPipe,
    TitlePrefixPipe
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule
  ],
  exports: [StudentListComponent, GallaryComponent, ProductComponent]
})
export class StudentsModule { }
