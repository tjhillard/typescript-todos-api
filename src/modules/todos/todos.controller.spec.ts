import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { TodoEntity } from './todo.entity';
import { Repository } from 'typeorm';
import { UserEntity } from '../users/user.entity';

describe('CatsController', () => {
  let todosController: TodosController;
  let todosService: TodosService;

  const user = { id: 1, email: 'foo@bar.com' };

  beforeEach(() => {
    todosService = new TodosService(new Repository<TodoEntity>(), new Repository<UserEntity>());
    todosController = new TodosController(todosService);
  });

  // describe('getAllTodos()', () => {
  //   it('should return a collection of todos', async () => {
  //     const result = ['test'];
  //     jest.spyOn(todosService, 'getAll').mockImplementation(() => result);

  //     expect(await todosController.index(user)).toBe(result);
  //   });
  // });

  // describe('getTodo()', () => {
  //   it('should return a single todo', async () => {
  //     const result = { description: 'walk the cat' };
  //     jest.spyOn(todosService, 'getOne').mockImplementation(() => result);

  //     expect(await todosController.show(1, user)).toBe(result);
  //   });
  // });

  // describe('createTodo()', () => {
  //   it('should create a new todo and return it', async () => {
  //     const todo = { description: 'walk the cat' };
  //     jest.spyOn(todosService, 'create').mockImplementation(() => todo);

  //     expect(await todosController.create(todo, user)).toBe(todo);
  //   });
  // });

  // describe('updateTodo()', () => {
  //   it('should update a todo and return it', async () => {
  //     const todo = { description: 'walk the cat' };
  //     jest.spyOn(todosService, 'update').mockImplementation(() => todo);

  //     expect(await todosController.update(1, todo)).toBe(todo);
  //   });
  // });

  // describe('destroyTodo()', () => {
  //   it('should destroy a todo and return it', async () => {
  //     jest.spyOn(todosService, 'softDelete').mockImplementation(() => ({ deleted: true }));

  //     expect(await todosController.destroy(1)).toEqual({ deleted: true });
  //   });
  // });
});
