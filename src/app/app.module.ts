/*Importing Library Modules*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// All materoial modules imported
import { MaterialModule } from './app.material';

/*Importing Component Modules*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { NavComponent } from './nav/nav.component';
import { PopupsComponent } from './popups/popups.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TableComponent } from './table/table.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
    declarations: [
        AppComponent,
        FormsComponent,
        NavComponent,
        PopupsComponent,
        ButtonsComponent,
        TableComponent,
        LayoutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule, // All materoial modules imported
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
