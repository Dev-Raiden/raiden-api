interface TikTokDownloader {
    author: {
        username: string;
    }
    description: string;
    videos: {
        [Key: string]: string;
    }
}

export type TikTokDownloaderTypes = TikTokDownloader & {
    videos: {
        without_watermark_v1: string;
        without_watermark_v2: string;
        without_watermark_raw: string;
    }
}

interface InstagramDownloader {
    url: string ;
}

export type InstagramDownloaderTypes = InstagramDownloader & {
    thumbnail: string;
}

export interface YouTubeDownloader {
    video_id: string,
    video_v_id: string;
    video_thumbnail: string;
    video_title: string;
    files: {
        video: YouTubeDownloaderVideoOrAudio;
        audio: YouTubeDownloaderVideoOrAudio;
    }
}

export type YouTubeDownloaderVideoOrAudio = {
    [key: string]: {
        video_quality: string;
        video_sizeH: string;
        video_size: number;
        download_link(): Promise<string>;
    }
}

export interface YouTubeSearching {
    video: {
        author: string;
        authorUrl?: string;
        videoId: string;
        url: string;
        thumbnail: string;
        title: string;
        description?: string;
        publishedTimes: string;
        durationH: string;
        durationS: number;
        duration: string;
        viewH: string;
        view: string;
        type: 'video';
    }[];

    channel: {
        channelId: string;
        url: string;
        channelName: string;
        profileUrl: string;
        isVerif: boolean;
        subscriberH: string;
        subscribers: string;
        videoCOunt: number;
        description: string;
        type: 'channel';
    }[];

    playlist: {
        playlistId: string;
        title: string;
        thumbnail: string;
        video: {
            videoId: string;
            title: string;
            durationH: string;
            duration: string;
        }[];
        type: 'mix';
    }[];
}