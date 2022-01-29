import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Activity extends Document {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  picture: string;
  @Prop()
  review: number;
  @Prop()
  openAt: string;
  @Prop()
  iframe: string;
}
export const ActivitySchema = SchemaFactory.createForClass(Activity);
