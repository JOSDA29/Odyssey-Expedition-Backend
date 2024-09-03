import Perspective from 'perspective-api-client';
import { config } from '../../config/moderator/configModerator';
import { analysisResponse } from '../../interfaces/moderator/moderator';

export default class PerspectiveRepository {
    private client: Perspective;

    constructor() {
        this.client = new Perspective({ apiKey: config.perspectiveApiKey });
    }

    async analyzeComment(comment: string): Promise<analysisResponse> {
        const response = await this.client.analyze({
            comment: { text: comment },
            languages: ['es'],
            requestedAttributes: { 
                TOXICITY: {}, 
                SEVERE_TOXICITY: {},
                INSULT: {},
                THREAT: {},
                PROFANITY: {},
            },
        });
        return response as analysisResponse;
    }
}
