import { Client } from 'discord.js';

const settings: {
    ready: boolean;
    login: boolean;
    testMode: boolean;
    clientId: string;
    token: string;
    baseUrl: string;
    parameters: any;

    readyClients: { [token: string]: boolean };
    loginQueue: { [token: string]: boolean };
    clientMap: { [token: string]: Client };
    credentials: { [token: string]: { token: string; clientId: string } };
    
    triggerNodes: { [token: string]: { [nodeId: string]: any } };
} = {
    ready: false,
    login: false,
    testMode: false,
    clientId: '',
    token: '',
    baseUrl: '',
    parameters: {},

    triggerNodes: {},

    readyClients: {},
    loginQueue: {},
    clientMap: {},
    credentials: {},
}

export default settings;