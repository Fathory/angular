import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoneItemComponent } from './done-item.component';



@NgModule({
    declarations: [DoneItemComponent],
    exports: [
        DoneItemComponent
    ],
    imports: [
        CommonModule
    ]
})
export class DoneItemModule { }
