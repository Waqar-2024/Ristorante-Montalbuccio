import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-section',
  standalone: true,
  imports: [MatGridListModule,MatCardModule,MatIconModule,MatProgressBarModule,CommonModule],
  templateUrl: './skill-section.component.html',
  styleUrl: './skill-section.component.css'
})
export class SkillSectionComponent {

  skills = [
    { name: 'HTML', icon: 'code', proficiency: 90 },
    { name: 'CSS', icon: 'brush', proficiency: 98 },
    { name: 'Bootstrap', icon: 'desktop_mac', proficiency: 80 },
    { name: 'JavaScript', icon: 'language', proficiency: 98 },
    { name: 'Angular', icon: 'developer_mode', proficiency: 98 },
    { name: 'React', icon: 'react', proficiency: 85 },
    { name: 'C', icon: 'code', proficiency: 60 },
    { name: 'C++', icon: 'code', proficiency: 60 },
    { name: 'Git', icon: 'git_branch', proficiency: 80 },
    { name: 'GitHub', icon: 'github', proficiency: 80 }
  ];

  // according to width show skills
  get cols(): number {
    if (window.innerWidth < 600) {
      return 2;
    } else if (window.innerWidth < 960) {
      return 3;
    } else {
      return 5;
    }
  }
  
}
 