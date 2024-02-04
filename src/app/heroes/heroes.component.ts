import {Component, OnInit} from '@angular/core';
import {Hero} from "../../domain/Hero";
import {NgFor} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    RouterLink
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit{
  heroes: Hero[] = [];

  constructor(private readonly heroService: HeroService, private readonly messageService: MessageService) {}

  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
