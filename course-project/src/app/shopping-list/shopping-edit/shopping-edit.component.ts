import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInputRef;
  @ViewChild('amountInput', { static: true }) amountInputRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  
  ingredients = [];

  addIngredient() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }

  deleteIngredient() {

  }

  clearIngredients() {

  }


  constructor() { }

  ngOnInit() {
  }

}
