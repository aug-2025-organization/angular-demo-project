import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'countries',
  imports: [CommonModule],
  templateUrl: './countries-list.html',
  styleUrl: './countries-list.css',
})
export class CountriesList {
  countries: string[] = ['India', 'USA', 'UK', 'Canada', 'Australia'];
}
