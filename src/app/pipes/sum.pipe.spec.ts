import { SumPipe } from './sum.pipe';
import { Observable } from 'rxjs';
import { Promise } from 'q';

describe('SumPipe', () => {
  let pipe: SumPipe;

  beforeEach(() => {
    pipe = new SumPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sum two values', () => {
    expect(pipe.transform(0, 1, 1)).toBe(2);
  });

});
