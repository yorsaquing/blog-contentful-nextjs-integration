import { createClient } from "contentful";

// Get your SPACE_ID and ACCESS_TOKEN in Contentful Settings -> API Key
export const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
});