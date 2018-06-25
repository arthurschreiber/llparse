import * as frontend from 'llparse-frontend';

import { Compilation } from '../compilation';
import { Node } from './base';

export class SpanEnd extends Node<frontend.node.SpanEnd> {
  public doBuild(out: string[]): void {
    const otherwise = this.ref.otherwise!;

    if (!otherwise.noAdvance) {
      this.prologue(out);
    }

    this.tailTo(out, otherwise);
  }
}
