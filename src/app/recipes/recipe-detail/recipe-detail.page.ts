import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { RecipesService } from 'src/app/recipes.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  recipe : Recipe
  constructor(private recipeService : RecipesService,private activatedRoute : ActivatedRoute , private routes:Router, private alert : AlertController,public actionSheetController: ActionSheetController) { }

  ngOnInit() {
      this.activatedRoute.paramMap.subscribe(paraMap => {
        if(!paraMap.has('recipeId')){
          return ;
        }
        const recipeId = paraMap.get('recipeId');
        this.recipe = this.recipeService.getRecipe(recipeId)
      })
  }
  
  
  async onDelete(){
    const alert = await this.actionSheetController.create({
      header: 'Delete',
      //message: 'Do you want to delete?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipeService.onDelete(this.recipe.id)
            this.routes.navigate(['/recipes']);
          }
        }
      ]
    });
    alert.present();
   
  }

}
