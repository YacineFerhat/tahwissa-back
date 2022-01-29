import { Injectable } from '@nestjs/common';
import { Restaurant } from './entities/restaurant.entity';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectModel(Restaurant.name)
    private restaurantModel: Model<Restaurant>,
  ) {}

  findAll = async () => {
    return this.restaurantModel.find();
  };

  findByAlias = async (alias: string) => {
    return await this.restaurantModel.findOne({ alias: alias });
  };

  findByName = async (name: string) => {
    return await this.restaurantModel.find({
      name: { $regex: `.*${name}.*` },
    });
  };
}
