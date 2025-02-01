'use server';

import 'dotenv/config';

interface getMusicResponse {
    data: [];
    total: number,
    next: string,
}

export const getData = async (limit: string): Promise<getMusicResponse> => { 
    const data = await fetch(
        'https://api.mangadex.org/author?limit=' + limit,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                "User-Agent": "(Windows NT 10.0; Win64; x64)  Chrome/133.0.6943.39",
            },
        }
    );
    const response = await data.json();

    return response;
}