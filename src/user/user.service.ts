import { Injectable } from '@nestjs/common';
import { UserDataService } from './user.data.service';

@Injectable()
export class UserService {
  constructor(private readonly userDataService: UserDataService) {}

  getAllUsers() {
    return this.userDataService.getAllUsers();
  }

  getUserById(id: number) {
    return this.userDataService.getUserById(id);
  }

  createUser(data: { name?: string; email: string; phone?: string }) {
    return this.userDataService.createUser(data);
  }

  updateUser(
    id: number,
    data: { name?: string; email: string; phone?: string },
  ) {
    return this.userDataService.updateUser(id, data);
  }

  deleteUser(id: number) {
    return this.userDataService.deleteUser(id);
  }
}
