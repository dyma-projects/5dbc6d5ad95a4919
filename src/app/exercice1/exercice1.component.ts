import { Component, OnInit } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  // Titre de la page - Interpolation de variable
  public pageTitle = 'Interpolation de variable'

  // Checkbox - Liaison sur attribut - La liaison de propriété
  public type = 'checkbox';
  public id = 'checkbox-liaison'
  public name = 'checkbox';
  public checked = true;
  public fontSize = '10px';


  // Liaison sur évènement - mouseenter
  /**
   * @description
   * Modifie la taille de la police
   * 
   * @param size la taille de la font
   */
  public changeFontSize(size: string): void {
    this.fontSize = size;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
