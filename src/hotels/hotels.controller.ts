import { Controller, Get, Param } from '@nestjs/common';
import { HotelsService } from './hotels.service';

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @Get()
  findAll() {
    return this.hotelsService.findAll();
  }

  @Get('search/:name')
  findByName(@Param('name') name: string) {
    return this.hotelsService.findByName(name);
  }

  @Get('alias/:alias')
  findByAlias(@Param('alias') alias: string) {
    return this.hotelsService.findByAlias(alias);
  }
}
