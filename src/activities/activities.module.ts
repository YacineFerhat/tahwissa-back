import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivitySchema, Activity } from './entities/activity.entity';
@Module({
  controllers: [ActivitiesController],
  providers: [ActivitiesService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Activity.name,
        schema: ActivitySchema,
      },
    ]),
  ],
})
export class ActivitiesModule {}
