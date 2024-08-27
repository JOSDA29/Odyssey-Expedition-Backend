declare module 'perspective-api-client' {
    interface AnalyzeRequest {
        comment: {
            text: string;
        };
        languages?: string[];
        requestedAttributes: {
            [key: string]: object;
        };
    }

    interface AttributeScores {
        [key: string]: {
            summaryScore: {
                value: number;
            };
        };
    }

    interface AnalyzeResponse {
        attributeScores: AttributeScores;
    }

    class Perspective {
        constructor(options: {apiKey: string});
        analyze(request: AnalyzeRequest): Promise<AnalyzeResponse>;
    }

    export default Perspective;
}