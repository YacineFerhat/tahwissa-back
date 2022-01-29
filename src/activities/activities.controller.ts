import { Controller, Get, Param } from '@nestjs/common';
import { ActivitiesService } from './activities.service';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Get()
  findAll() {
    return this.activitiesService.findAll();
  }

  @Get('search/:name')
  findOne(@Param('name') name: string) {
    return this.activitiesService.findByName(name);
  }

  @Get('alias/:alias')
  findByAlias(@Param('alias') alias: string) {
    return this.activitiesService.findByAlias(alias);
  }

  @Get('searchTop/:name')
  findByNameTop(@Param('name') name: string) {
    return this.activitiesService.findByNameTop(name);
  }
  @Get('top/')
  findTop() {
    return this.activitiesService.findTop();
  }
}
