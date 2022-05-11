import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  counter: number = 0;

  example1(): string {
    return 'Server online!';
  }

  example2(word: string): string {
    return `Your parameter was: ${word}`;
  }

  example3(name: string, age: number): string {
    return `Your name is ${name} and you're ${age} years old :)`;
  }

}
