import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { NavComponent } from "./components/nav/nav.component";
import { BannerComponent } from "./components/banner/banner.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { CoverComponent } from "./components/cover/cover.component";
import { GuestsComponent } from "./components/guests/guests.component";
import { DressCodeComponent } from "./components/dress-code/dress-code.component";
import { FaqComponent } from "./components/faq/faq.component";

// ROUTES
const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "guests", component: GuestsComponent },
  { path: "dress-code", component: DressCodeComponent },
  { path: "faq", component: FaqComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    BannerComponent,
    SidebarComponent,
    CoverComponent,
    GuestsComponent,
    DressCodeComponent,
    FaqComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
