import { Component, OnInit } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  // Attribut du checkbox
  type = 'checkbox';
  id = 'checkbox-liaison'
  name = 'checkbox';
  checked = true;
  fontSize = '10px';


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
