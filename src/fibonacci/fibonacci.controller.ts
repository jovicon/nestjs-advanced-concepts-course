import { Controller, Get, Query } from '@nestjs/common';
import { FibonacciWorkerHost } from './fibonacci.worker.host';
import Piscina from 'piscina';
import { resolve } from 'path';

@Controller('fibonacci')
export class FibonacciController {
  constructor(private readonly fibonacciWorkerHost: FibonacciWorkerHost) {}

  fibonacciWorker = new Piscina({
    filename: resolve(__dirname, 'fibonacci.worker.js'),
  });

  @Get()
  fibonacci(@Query('n') n = 10) {
    return this.fibonacciWorkerHost.run(n);
  }

  @Get('/piscina')
  fibonaccipiscina(@Query('n') n = 10) {
    return this.fibonacciWorker.run(n);
  }
}
