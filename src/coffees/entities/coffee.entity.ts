import { WithUuid } from '../../common/mixins/with-uuid.mixin/with-uuid.mixin';

export class Coffee {
  constructor(public name: string) {}
}

const CoffeeWithUuidCls = WithUuid(Coffee); // 👈 use the new WithUuid mixin

const coffee = new CoffeeWithUuidCls('Buddy Brew');
