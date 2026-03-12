import { Component, CUSTOM_ELEMENTS_SCHEMA, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  imports: [RouterLink, RouterLinkActive],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Sidebar {
  linkClicked = output();

  onLinkClick() {
    this.linkClicked.emit();
  }
}
