import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic Route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello! This is a TypeScript Express server!!!');
});

// A sample API route
app.get('/api/status', (req: Request, res: Response) => {
    res.json({
        status: 'Online',
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`⚡️ Server is running at http://localhost:${PORT}`);
});
