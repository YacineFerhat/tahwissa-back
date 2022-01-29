import { Controller, Get, Param } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Get()
  findAll() {
    return this.restaurantsService.findAll();
  }

  @Get('search/:name')
  findByName(@Param('name') name: string) {
    return this.restaurantsService.findByName(name);
  }

  @Get('alias/:alias')
  findByAlias(@Param('alias') alias: string) {
    return this.restaurantsService.findByAlias(alias);
  }
}
