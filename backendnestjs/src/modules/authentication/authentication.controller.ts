import { Body, Controller, Post } from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";

@Controller('auth')
export class AuthenticationController {
  
  
  
  @Post()
  async login(@Body() loginDto: LoginDto) {
    
  }
}
