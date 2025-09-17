import { NgModule } from "@angular/core";
import { MenuBarComponent } from "./menu-bar/menu-bar.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [MenuBarComponent],
    imports: [CommonModule, FormsModule, RouterModule],
    exports: [MenuBarComponent]
})
export class SharedModule {}