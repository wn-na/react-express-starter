export default class HTTPError extends Error {
    constructor(private statusCode: number, message?: string, private data?: unknown) {
        super(message);
        this.statusCode = statusCode;
        this.data = data;
    }

    get rawStatusCode(): number {
        return this.statusCode;
    }

    get rawData(): unknown {
        return this.data;
    }

    get rawStatusCodeMessage(): string {
        switch (this.statusCode) {
            case 400:
                return `400 Bad Request`;
            case 401:
                return `401 Unauthorized`;
            case 403:
                return `403 Forbidden`;
            case 404:
                return `404 Not Found`;
            case 414:
                return `414 URI Too Long`;
            case 500:
                return `500 Internal Server Error`;
            case 502:
                return `502 Bad Gateway`;
            case 503:
                return `503 Service Unavailable`;
            case 504:
                return `504 Gateway Timeout`;
        }
    }
}
