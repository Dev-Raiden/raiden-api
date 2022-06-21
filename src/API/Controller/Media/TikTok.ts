import Axios from 'axios';
import { TikTokDownloaderTypes } from './types';
import { ErrorAPI } from '../../utils/errors';

const TikTokDownloader = async (url: string): Promise<TikTokDownloaderTypes> => {
    const tiktoks = await Axios({
        method: 'GET',
        url: 'https://api.devraiden.tech/v1/tiktok',
        headers: {
            urls: url
        },
        responseType: 'json'
    });

    if (tiktoks instanceof Error) throw new ErrorAPI('Error while fetching tiktok data', tiktoks);

    return tiktoks.data;
};

export { TikTokDownloader };