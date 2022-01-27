import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-learning',
  templateUrl: './add-learning.component.html',
  styleUrls: ['./add-learning.component.css']
})
export class AddLearningComponent{

    form = new FormGroup({
      topics : new FormArray([])
    })

    addTopic(topic: HTMLInputElement){
      this.topics.push(new FormControl(topic.value));
      topic.value = '';
    }

    get topics(){
      return this.form.get('topics') as FormArray;
    }

    removeTopic(topic : any){
      let index = this.topics.controls.indexOf(topic);
      this.topics.removeAt(index);
    }

}
