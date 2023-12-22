// middleware/passwordProtection.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function passwordProtection(req: NextApiRequest, res: NextApiResponse, next: () => void) {
    const password = 'your_hardcoded_password';  
    const providedPassword = req.query?.password as string;  
    if (providedPassword === password) {
        // Password matches, allow access
        next();
    } else {
        // Password doesn't match, send unauthorized status
        res.status(401).json({ error: 'Unauthorized' });
    }
}
