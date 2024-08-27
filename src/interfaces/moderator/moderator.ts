export interface commentRequest {
    text: string;
}

export interface analysisResponse {
    attributeScores: {
        [key: string]: {
            summaryScore: {
                value: number;
            };
        };
    };
}
