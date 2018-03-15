import { IUniqueName } from '../utils';
import { Node } from './base';

class ErrorNode extends Node {
  constructor(id: IUniqueName, private readonly code: number,
              private readonly reason: string) {
    super(id);
  }
}

export { ErrorNode as Error };