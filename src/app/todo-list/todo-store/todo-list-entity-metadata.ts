import { DefaultDataServiceConfig, EntityMetadataMap } from '@ngrx/data';

export const todoListMetadata: EntityMetadataMap = {
  todoItems: { selectId: todoItemSelectedId }
};
/**
 * config about device entity meta data
 */
export const todoListServiceConfig: DefaultDataServiceConfig = {
  root: '',
  timeout: 10 * 1000 // request timeout
};

// tslint:disable-next-line:typedef
export function todoItemSelectedId<T extends { id: any }>(entity: any) {
  return entity == null ? undefined : entity.title;
}
