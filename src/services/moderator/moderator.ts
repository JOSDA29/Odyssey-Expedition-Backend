import PerspectiveRepository from '../../repository/moderator/moderator';
import { commentRequest } from '../../interfaces/moderator/moderator';

export class PerspectiveService {
    private repository: PerspectiveRepository;
    private toxicityThreshold: number;

    constructor() {
        this.repository = new PerspectiveRepository();
        this.toxicityThreshold = 0.5;
    }

    async analyzeAndDecide(commentRequest: commentRequest): Promise<boolean> {
        try {
            const { text } = commentRequest;
            const result = await this.repository.analyzeComment(text);



            const toxicityScore =
                result.attributeScores['TOXICITY']?.summaryScore.value;
            const severeToxicityScore =
                result.attributeScores['SEVERE_TOXICITY']?.summaryScore.value;
            const insultScore =
                result.attributeScores['INSULT']?.summaryScore.value;
            const threatScore =
                result.attributeScores['THREAT']?.summaryScore.value;
            const profanityScore =
                result.attributeScores['PROFANITY'].summaryScore.value;

            const isAllowed =
                toxicityScore < this.toxicityThreshold &&
                severeToxicityScore < this.toxicityThreshold &&
                insultScore < this.toxicityThreshold &&
                threatScore < this.toxicityThreshold &&
                profanityScore < this.toxicityThreshold;

            return isAllowed;
        } catch (error) {
            console.error('Error analyzing comment: ', error);
            return false;
        }
    }
}
