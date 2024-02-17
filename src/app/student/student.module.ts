import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { GetComponent } from './get/get.component';
import { ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AddComponent,
    UpdateComponent,
    DeleteComponent,
    GetComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports: [
    AddComponent,
    UpdateComponent,
    DeleteComponent,
    GetComponent
  ]
})
export class StudentModule { }
