import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { DataBindingComponent } from './components/data-binding/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { NexPrevComponent } from './components/nex-prev/nex-prev.component';
import { PrefixPipe } from './pipes/prefix.pipe';
import { GenderPipe } from './pipes/gender.pipe';
import { TitlePrefixPipe, GendersPipe } from './pipes/title-prefix.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { ItemsComponent } from './components/items/items.component';
import { AddClassDirective } from './directives/add-class.directive';
import { BgColorDirective } from './directives/bg-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    AboutComponent,
    ServicesComponent,
    DataBindingComponent,
    NexPrevComponent,
    PrefixPipe,
    GenderPipe,
    TitlePrefixPipe,
    GendersPipe,
    SearchPipe,
    ItemsComponent,
    AddClassDirective,
    BgColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
