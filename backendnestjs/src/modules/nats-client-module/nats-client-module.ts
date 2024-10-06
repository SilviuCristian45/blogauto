import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import AppConfig from 'src/config/app.config';
@Module({
    imports: [
        ClientsModule.register([
        {
            name: 'NATS_SERVICE',
            transport: Transport.NATS,
            options: {
            servers: [`nats://${AppConfig.NATS_HOST}`],
            }
        },
        ]),
    ],
    providers: [],
    controllers: [],
    exports: []
})

export class NatsClientModule {}

