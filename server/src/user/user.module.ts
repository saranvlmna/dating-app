import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { Images } from "src/database/images";
import { ImagesSchema } from "src/database/images";
import { Interests, InterestsSchema } from "src/database/interests";
import { Social, SocialSchema } from "src/database/social";
import { User, UserSchema } from "src/database/user";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  controllers: [UserController],
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Social.name, schema: SocialSchema },
      { name: Interests.name, schema: InterestsSchema },
      { name: Images.name, schema: ImagesSchema },
    ]),
    JwtModule,
  ],
  providers: [UserService],
})
export class UserModule {}
