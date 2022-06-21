import Axios from 'axios';
import { InstagramDownloaderTypes } from './types';
import { ErrorAPI } from '../../utils/errors';

const InstagramDownloader = async (url: string): Promise<InstagramDownloaderTypes> => {
    const instagram = await Axios({
        method: 'GET',
        url: 'https://api.devraiden.tech/v1/instagram',
        headers: {
            urls: url
        },
        responseType: 'json'
    });

    if (instagram instanceof Error) throw new ErrorAPI('Error while fetching instagram data', instagram);

    return instagram.data;
};

export { InstagramDownloader };