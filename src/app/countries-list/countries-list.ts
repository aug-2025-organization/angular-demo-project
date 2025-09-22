import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppHover } from "../directives/app-hover";

@Component({
  selector: 'countries',
  imports: [CommonModule, AppHover],
  templateUrl: './countries-list.html',
  styleUrl: './countries-list.css',
})
export class CountriesList {
  countries: string[] = ['India', 'USA', 'UK', 'Canada', 'Australia'];
}
