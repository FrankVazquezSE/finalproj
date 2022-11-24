import sanityClient from "@sanity/client";
import dotenv from "dotenv";

dotenv.config();

export default sanityClient({
    projectId: "m47f0p22",
    dataset: "production",
    useCdn: false, //doesn't cache every request so data isn't returned as stale data.
    apiVersion : "2022-09-15",
    token: process.env.SANITY_API_TOKEN,
});