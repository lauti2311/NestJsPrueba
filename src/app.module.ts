import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { HelloController } from './hello/hello.controller';

@Module({
  imports: [TaskModule, ProjectsModule, UsersModule, AuthModule],
  controllers: [HelloController],

})
export class AppModule {}
