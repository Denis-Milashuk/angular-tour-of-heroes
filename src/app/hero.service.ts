import { Injectable } from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Observable, of} from "rxjs";
import {Hero} from "../domain/Hero";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private readonly messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}