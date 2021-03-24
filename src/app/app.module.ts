import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '@/routes';
import { AppComponent } from '@/layout/app.component';
import { CustomsModule } from '@/customs.module';

import { ListComponent } from '@/components';

// SECTION PRIMENG
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [AppComponent, ListComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CustomsModule,
    TableModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    AvatarGroupModule,
    ToastModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
