import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { UserEntity } from './user.entity';
  
  @Entity('albums')
  export class AlbumEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @PrimaryGeneratedColumn('uuid')
    commentId!: string;
  
    @ManyToOne(() => UserEntity, { onDelete: 'CASCADE', onUpdate: 'CASCADE', nullable: false })
    owner!: UserEntity;
  
    @Column()
    ownerId!: string;
  
    @Column({ default: '' })
    comment!: string;
  
    @CreateDateColumn({ type: 'timestamptz' })
    createdAt!: Date;
  
    @UpdateDateColumn({ type: 'timestamptz' })
    updatedAt!: Date;
  
    @Column({ default: false })
    isModified!: boolean;
  }
  