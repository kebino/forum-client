import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThreadListComponent } from './thread-list/thread-list.component';

import { ThreadListService } from './thread-list/thread-list.service';
import { AddTopicComponent } from './add-topic/add-topic.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ThreadListComponent,
    AddTopicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ThreadListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
