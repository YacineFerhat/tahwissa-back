import { Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { Hotel } from './entities/hotel.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class HotelsService {
  constructor(
    @InjectModel(Hotel.name)
    private hotelModel: Model<Hotel>,
  ) {}

  findAll = async () => {
    return this.hotelModel.find();
  };

  findByAlias = async (alias: string) => {
    return await this.hotelModel.findOne({ alias: alias });
  };

  findByName = async (name: string) => {
    return await this.hotelModel.find({
      name: { $regex: `.*${name}.*` },
    });
  };

  createHotels = async () => {
    const hotels = [];
    hotels.map(async (hotel) => {
      const data = await this.hotelModel.create({
        name: hotel.name,
        picture: hotel.picture,
        description: hotel.description,
        review: hotel.review,
        iframe: hotel.iframe,
      });
      data.save();
    });
  };
}
