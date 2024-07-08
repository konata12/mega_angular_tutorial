import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-tag',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './skill-tag.component.html',
  styleUrl: './skill-tag.component.scss',
})
export class SkillTagComponent {
  @Input() skillType: string = 'anus'
}
