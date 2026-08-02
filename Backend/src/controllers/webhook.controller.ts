import { Request, Response } from 'express';
import { env } from '../config/env.js';

export function verifyWebhook(req: Request, res: Response) {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (
        mode === 'subscribe' &&
        token === env.META_VERIFY_TOKEN
    ) {
        return res.status(200).send(challenge);
    } 
    return res.sendStatus(403);
}

export function receiveWebhook(req: Request, res: Response) {
    console.log("Webhook recibido");
    console.dir(req.body, {
        depth: null,
    });
    return res.sendStatus(200);
}