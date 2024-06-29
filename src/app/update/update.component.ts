import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
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
    name?: string;
    address?: string;
    website?: string;
  };
}

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})

export class UpdateComponent implements OnInit {
  users: User[] = [];
  searchTerm: string = '';
  selectedRole: string = '';
  selectedUser: User | null = null;
  selectedComanyName: string = '';
  selectedComanyAddress: string = '';
  selectedComanyWebsite: string = '';

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

  openEditForm(user: User) {
    this.selectedUser = { ...user };
    this.selectedComanyName = this.selectedUser.companyDetails?.name || '';
    this.selectedComanyAddress = this.selectedUser.companyDetails?.address || '';
    this.selectedComanyWebsite = this.selectedUser.companyDetails?.website || '';
  }

  cancelEdit() {
    this.selectedUser = null;
    this.selectedComanyName = '';
    this.selectedComanyAddress = '';
    this.selectedComanyWebsite = '';
  }

  updateUser() {
    if (this.selectedUser) {
      const { email, ...userData } = this.selectedUser;
      this.userService.updateUser(email, userData).subscribe(() => {
        this.fetchUsers();
        this.selectedUser = null;
        this.selectedComanyName = '';
        this.selectedComanyAddress = '';
        this.selectedComanyWebsite = '';
      });
    }
  }

  deleteUser(email: string) {
    this.userService.deleteUser(email).subscribe(() => {
      this.fetchUsers();
    });
  }
}