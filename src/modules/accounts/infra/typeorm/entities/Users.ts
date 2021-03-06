import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  Timestamp,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  driver_license: string;

  @Column({ name: "admin" })
  isAdmin: boolean;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Timestamp;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
