import { InMemoryLessonsRepository } from '../../tests/repositories/inMemoryLessonsRepositories';
import { CreateLesson } from './CreateLesson';

describe('CreateLesson service', () => {
  it('shoud be able to create a new lesson', async () => {
    const inMemoryLessonRepository = new InMemoryLessonsRepository();
    const createLesson = new CreateLesson(inMemoryLessonRepository);

    await expect(
      createLesson.execute({ title: 'Nova aula' })
    ).resolves.not.toThrow();

    expect(inMemoryLessonRepository.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Nova aula',
        }),
      ])
    );
  });

  it('shoud NOT be able to create a new lesson with invalid title', async () => {
    const inMemoryLessonRepository = new InMemoryLessonsRepository();
    const createLesson = new CreateLesson(inMemoryLessonRepository);

    await expect(
      createLesson.execute({ title: '' })
    ).rejects.toThrow();

    expect(inMemoryLessonRepository.items).toEqual([]);
  });
});
