import Axios from 'axios';
import { YouTubeDownloader } from '../..';
import { ErrorAPI } from '../../utils/errors';

const YouTubeDownloaders= async (url: string): Promise<YouTubeDownloader> => {
    const youtube = await Axios({
        method: 'GET',
        url: 'https://api.devraiden.tech/v1/youtube',
        headers: {
            urls: url
        },
        responseType: 'json'
    });

    if (youtube instanceof ErrorAPI) throw new ErrorAPI('Error while fetching YouTube data.', youtube);

    return youtube.data;
};

export { YouTubeDownloaders };