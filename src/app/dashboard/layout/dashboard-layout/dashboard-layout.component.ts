import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [MaterialModule, RouterModule],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})


export class DashboardLayoutComponent {
  public sidebarItems: any;
  private authService = inject(AuthService);

  constructor() {
    this.sidebarItems = [
      { label: 'BD', icon: 'storage', url: './db' },
      { label: 'Usuarios', icon: 'group', url: './users' },
      { label: 'Tipos de Discapacidad', icon: 'accessible_forward', url: './tiposDiscapacidad' },
      { label: 'Beneficiarios', icon: 'diversity_3', url: './beneficiaries' },
      { label: 'Planillas', icon: 'format_indent_increase', url: './planillas' },

      // { label: 'listado', icon: 'label', url: './list' }
      // { label: 'listado', icon: 'label', url: './list' }
    ]
  }


  logout(){
    this.authService.logout();
  }


}
