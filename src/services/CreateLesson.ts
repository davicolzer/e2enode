import { LessonsRepository } from '../repositories/LessonsRepository';

interface CreateLessonRequest {
  title: string;
  description?: string;
}

export class CreateLesson {
  constructor(private lessonsRepository: LessonsRepository) {}

  async execute({ title, description }: CreateLessonRequest) {
    if (!title) {
      throw new Error('title is required');
    }
    await this.lessonsRepository.create({
      title,
      description,
    });
  }
}
