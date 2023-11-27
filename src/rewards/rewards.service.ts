import { Injectable } from '@nestjs/common';

@Injectable()
export class RewardsService {
  grantTo() {
    console.log('Hello from the lazy-loaded RewardsService 👋');
  }
}
