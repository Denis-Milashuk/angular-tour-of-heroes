import { NgIf, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Hero } from '../../domain/Hero';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    UpperCasePipe
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
    @Input() hero?: Hero;
}
