// middleware/passwordProtection.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function passwordProtection(req: NextApiRequest, res: NextApiResponse, next: () => void) {
    const password = 'your_hardcoded_password'; // Replace with your actual password
    const providedPassword = req.query.password as string; // Modify this as needed to get the password

    if (providedPassword === password) {
        // Password matches, allow access
        next();
    } else {
        // Password doesn't match, send unauthorized status
        res.status(401).json({ error: 'Unauthorized' });
    }
}
