import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserDataService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllUsers(): Promise<
    { id: number; name: string | null; email: string | null }[]
  > {
    return this.prisma.user.findMany({
      select: { id: true, name: true, email: true },
    });
  }

  async getUserById(
    id: number,
  ): Promise<{ id: number; name: string | null; email: string | null }> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: { id: true, name: true, email: true },
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async createUser(data: {
    name?: string;
    email: string;
    phone?: string;
  }): Promise<{ id: number; name: string | null; email: string | null }> {
    return this.prisma.user.create({
      data,
      select: { id: true, name: true, email: true },
    });
  }

  async updateUser(
    id: number,
    data: { name?: string; email: string; phone?: string },
  ): Promise<{ id: number; name: string | null; email: string | null }> {
    try {
      return await this.prisma.user.update({
        where: { id },
        data,
        select: { id: true, name: true, email: true },
      });
    } catch {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }

  async deleteUser(
    id: number,
  ): Promise<{ id: number; name: string | null; email: string | null }> {
    try {
      return await this.prisma.user.delete({
        where: { id },
        select: { id: true, name: true, email: true },
      });
    } catch {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }
}
