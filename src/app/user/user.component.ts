import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  _id: string;
  email: string;
  username: string;
  password: string;
  role: string;
  createdAt: Date;
  companyDetails?: {
    name?: string ;
    address?: string ;
    website?: string ;
  };
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  users: User[] = [];
  searchTerm: string = '';
  selectedRole: string = '';
  selectedUser: User | null = null;
  selectedCompanyName: string = ''; 
  selectedCompanyAddress: string = '';
  selectedCompanyWebsite: string = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }

  filteredUsers(): User[] {
    return this.users.filter(user =>
      (this.searchTerm === '' || user.username.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
      (this.selectedRole === '' || user.role === this.selectedRole)
    );
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedRole = '';
  }

  openEditModal(user: User) {
    this.selectedUser = { ...user }; 
    this.selectedCompanyName = this.selectedUser.companyDetails?.name || ''; 
    this.selectedCompanyAddress = this.selectedUser.companyDetails?.address || ''; 
    this.selectedCompanyWebsite = this.selectedUser.companyDetails?.website || '';
  }

  closeEditModal() {
    this.selectedUser = null; 
    this.selectedCompanyName = ''; 
    this.selectedCompanyAddress = ''; 
    this.selectedCompanyWebsite = ''; 
  }

  updateUser() {
    if (this.selectedUser) {
      
      this.selectedUser.companyDetails = {
        ...this.selectedUser.companyDetails,
        name: this.selectedCompanyName,
        address: this.selectedCompanyAddress,
        website: this.selectedCompanyWebsite
      };
      
      const { email, ...userData } = this.selectedUser; 
      this.userService.updateUser(email, userData).subscribe(() => {
        this.fetchUsers();
        this.selectedUser = null;      
        this.selectedCompanyName = '';
        this.selectedCompanyAddress = '';
        this.selectedCompanyWebsite = '';
      });
    }
  }

  deleteUser(email: string) {
    this.userService.deleteUser(email).subscribe(() => {
      this.fetchUsers();
    });
  }
}
