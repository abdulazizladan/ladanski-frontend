import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
//import { ChartsModule } from 'ng2-charts';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './components/product/product.component';
import { ProducDetailsComponent } from './components/produc-details/produc-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProducDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //ChartsModule,
    FlexLayoutModule,    
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
