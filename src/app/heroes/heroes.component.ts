import { Component } from '@angular/core';
import {Hero} from "../../domain/Hero";
import {NgFor, NgIf, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HEROES} from "../mock-heroes";
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    HeroDetailComponent
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  selectedHero: Hero | undefined;
  heroes = HEROES;

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }
}
