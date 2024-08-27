import PerspectiveRepository from '../../repository/moderator/moderator';
import { commentRequest } from '../../interfaces/moderator/moderator';

export class PerspectiveService {
    private repository: PerspectiveRepository;

    constructor() {
        this.repository = new PerspectiveRepository();
    }

    async analyzeAndDecide(commentRequest: commentRequest): Promise<boolean> {
        try {
            const { text } = commentRequest;
            const result = await this.repository.analyzeComment(text);

            const toxicityThreshold = 0.5;
            const toxicityScore =
                result.attributeScores['TOXICITY'].summaryScore.value;
            console.log(toxicityScore);

            return toxicityScore < toxicityThreshold;
        } catch (error) {
            console.error('Error analyzing comment: ', error);
            return false;
        }
    }
}
