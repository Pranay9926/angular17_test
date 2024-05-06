import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-one',
  standalone: true,
  imports: [],
  templateUrl: './child-one.component.html',
  styleUrl: './child-one.component.scss'
})
export class ChildOneComponent implements OnChanges {
  @Input() isLogin:any ;
  lists:string[] = [];
  name = '';
  toggle = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.isLogin);
    
  }

  addItem(){
    this.lists.unshift(this.name)
    this.name=''
    
  }
  reomveItem(value:any){
    this.lists.splice(value,1)
    console.log(this.lists);
    
  }

  onClick(){
    this.toggle=!this.toggle
  }

  handleChnage(value:Event){
    const target = value.target as HTMLInputElement;
    this.name = target.value;
    console.log('Name changed to:', this.name);
  }


  
  
}
