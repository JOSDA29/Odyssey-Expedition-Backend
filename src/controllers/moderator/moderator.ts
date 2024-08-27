import { Request, Response } from 'express';
import { PerspectiveService } from '../../services/moderator/moderator';
import { commentRequest } from '../../interfaces/moderator/moderator';

export default class PerspectiveController {
    private service: PerspectiveService;

    constructor() {
        this.service = new PerspectiveService();
    }

    async analyzeComment(req: Request, res: Response): Promise<void> {
        try {
            const commentRequest: commentRequest = req.body;
            const isAllowed =
                await this.service.analyzeAndDecide(commentRequest);

            if (isAllowed) {
                res.status(200).json({
                    message: 'Comment approved for publication',
                });
            } else {
                res.status(400).json({
                    message: 'Comment rejected due to high toxicity.',
                });
            }
        } catch (error) {
            res.status(500).json({
                error: 'Error Server Internal',
            });
        }
    }
}
