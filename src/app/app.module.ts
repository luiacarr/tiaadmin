import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LeftbarComponent } from './shared/leftbar/leftbar.component';
import { ControlComponent } from './index/control/control.component';
import { ProcessComponent } from './index/process/process.component';
import { StatsComponent } from './index/stats/stats.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, LeftbarComponent, ControlComponent, ProcessComponent, StatsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
