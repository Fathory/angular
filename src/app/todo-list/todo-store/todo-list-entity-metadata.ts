import {DefaultDataServiceConfig, EntityMetadataMap} from '@ngrx/data';
import {Todo} from '../todo-list.constant';

export const todoListMetadata: EntityMetadataMap = {
  todoItems: {selectId: todoItemSelectedId},
  doneItems: {selectId: doneItemSelectedId}
};
/**
 * config about device entity meta data
 */
export const todoListServiceConfig: DefaultDataServiceConfig = {
  root: '',
  timeout: 10 * 1000 // request timeout
};

// tslint:disable-next-line:typedef
export function todoItemSelectedId<T extends { id: any }>(entity: Todo) {
  return entity == null ? undefined : entity.title;
}

// tslint:disable-next-line:typedef
export function doneItemSelectedId<T extends { id: any }>(entity: Todo) {
  return entity == null ? undefined : entity.title;
}
