import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient{

    async onApplicationShutdown(signal?: string) {
        await this.$disconnect();
    } // definition is needed to ensure your application shuts down gracefully
}
