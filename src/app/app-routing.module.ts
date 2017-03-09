import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThreadListComponent } from './thread-list/thread-list.component';

const routes: Routes = [
  { path: 'home', component: ThreadListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }  
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}
