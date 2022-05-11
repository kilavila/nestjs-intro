import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(
    // In the top we import the app.service.ts file
    // Here we "declare" it
    // Now we can call functions from that file
    private appService: AppService
  ) {}

  // The server URL will be: http://localhost:3000
  // The first request is called "status"
  // And we use it like so: serverUrl/status
  // So this will in this case be http://localhost:3000/status

  @Get('status')
  example1(): string {
    return this.appService.example1();
  }

  // example2(): string
  // This means that we run the "example2()" function, and expect a "string" in return
  @Post('echo/:word')
  example2(@Param('word') word: string): string {
    return this.appService.example2(word);
  }

  @Post('body')
  example3(@Body() body: Person): string {
    return this.appService.example3(body.name, body.age);
  }

}

// An interface is a description of data/an object

// Just like we use string, number and boolean we can
// now also use Person

export interface Person {
  name: string;
  age: number;
}