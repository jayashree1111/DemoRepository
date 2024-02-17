import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

   constructor(private ps:FormBuilder){}
 
   student:FormGroup;
  ngOnInit(): void {
    this.student=this.ps.group(
      {
        id:[],
        name:[],
        username:[],
        password:[] 
      }
    )
  }
  onSubmit()
  {
    console.log(this.student.value)
    let stu:Student = Object.assign([],this.student.value)
  }


  
  

}
