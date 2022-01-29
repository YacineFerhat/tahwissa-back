import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Restaurant extends Document {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  picture: string;
  @Prop()
  review: number;
  @Prop()
  iframe: string;
  @Prop()
  alias: string;
  @Prop()
  tags: string[];
  @Prop()
  adress: string;
  @Prop()
  phoneNumber: string;
  @Prop()
  menu: Array<{
    name: string;
    ingredients: string;
    price: number;
  }>;
}
export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
