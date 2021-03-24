import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomsRoutingModule } from '@/routes';
import { MemoComponent, DetailsComponent } from '@/components';

// SECTION PRIMENG
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ChartModule } from 'primeng/chart';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [MemoComponent, DetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    CustomsRoutingModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    PanelModule,
    BrowserModule,
    BrowserAnimationsModule,
    TooltipModule,
    RippleModule,
    ToastModule,
    ChartModule,
    RadioButtonModule,
  ],
  providers: [],
})
export class CustomsModule {}
