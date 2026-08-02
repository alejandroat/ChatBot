import dotenv from 'dotenv';

dotenv.config();

export const env = {
    PORT: Number(process.env.PORT) || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    
    META_VERIFY_TOKEN: process.env.META_VERIFY_TOKEN || "",
    META_ACCESS_TOKEN: process.env.META_ACCESS_TOKEN || "",
    META_PHONE_NUMBER_ID: process.env.META_PHONE_NUMBER_ID || "",
    META_BUSINESS_ACCOUNT_ID: process.env.META_BUSINESS_ACCOUNT_ID || "",
}