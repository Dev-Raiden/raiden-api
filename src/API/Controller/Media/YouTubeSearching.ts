import Axios from 'axios';
import { YouTubeSearching } from './types';
import { ErrorAPI } from '../../utils/errors';

const YouTubeSearchings = async (title: string): Promise<YouTubeSearching> => {
    const searching = await Axios({
        method: 'GET',
        url: 'https://api.devraiden.tech/v1/youtube/search',
        headers: {
            value: title
        },
        responseType: 'json'
    });

    if (searching instanceof Error) throw new ErrorAPI('Error while fetching YouTube Search result data.', searching);

    return searching.data;
};

export { YouTubeSearchings };