import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Model } from 'mongoose';
import { Activity } from './entities/activity.entity';
import { InjectModel } from '@nestjs/mongoose';
import { find } from 'rxjs';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectModel(Activity.name)
    private activityModel: Model<Activity>,
  ) {}

  findAll = async () => {
    return await this.activityModel.find();
  };

  findByName = async (name: string) => {
    return await this.activityModel.find({
      name: { $regex: `.*${name}.*` },
    });
  };

  findByAlias = async (alias: string) => {
    return await this.activityModel.findOne({ alias: alias });
  };

  findByNameTop = async (name: string) => {
    return await this.activityModel
      .find({
        name: { $regex: `.*${name}.*` },
      })
      .limit(3);
  };

  findTop = async () => {
    return await this.activityModel.find().limit(3);
  };
}
