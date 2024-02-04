import {Component, OnInit} from '@angular/core';
import {Hero} from "../../domain/Hero";
import {HeroService} from "../hero.service";
import {ActivatedRoute} from "@angular/router";
import {MessageService} from "../message.service";
import {Location, NgIf, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    NgIf,
    UpperCasePipe,
    FormsModule
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit{
  hero: Hero | undefined;

  constructor(
    private readonly heroService: HeroService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly messageService: MessageService,
    private readonly location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.messageService.add(`HeroDetail: received path param id: ${id}`);
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(){
    this.location.back();
  }
}
