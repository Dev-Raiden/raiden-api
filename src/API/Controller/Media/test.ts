import { expect } from 'chai';
import { TikTokDownloader, InstagramDownloader, YouTubeDownloaders, YouTubeSearchings } from './index.js';

describe('Media', () => {
    describe('TikTok Scraper', function () {
        it('TikTokDownloader', function (done) {
            TikTokDownloader('https://vt.tiktok.com/ZSdcacgM1/?k=1').then(function (res) {
                expect(res).to.be.an('object');
                expect(res.author).to.be.an('object');
                expect(res.author.username).to.be.a('string');
                expect(res.description).to.be.a('string');
                expect(res.videos).to.be.an('object');
                expect(res.videos.without_watermark_v1).to.be.a('string');
                expect(res.videos.without_watermark_v2).to.be.a('string');
                expect(res.videos.without_watermark_raw).to.be.a('string');

                return done();
            }).catch(done);
        });
    });

    describe('InstagramDownloader', () => {
        it('InstagramDownloader', (done) => {
            InstagramDownloader('https://www.instagram.com/p/CcgDk-AFZKN/').then((res) => {
                expect(res).to.be.an('array');
                expect(res).to.have.lengthOf.at.least(1);

                return done();
            }).catch(done);
        });
    });

    describe('YouTube', function() {
        it('YouTube Downloader', (done) => {
            YouTubeDownloaders('https://www.youtube.com/watch?v=g-nG6n7yx3Q').then((res) => {
                expect(res).to.be.an('object');
                expect(res.video_thumbnail).to.be.a('string');
                expect(res.video_title).to.be.a('string');
                expect(res.files.video).to.be.an('object');
                expect(res.files.audio).to.be.an('object');

                return done();
            }).catch(done);
        });

        it('YouTube Searchings', (done) => {
            YouTubeSearchings('Minecraft').then((res) => {
                expect(res).to.be.an('object');
                expect(res.video).to.be.an('array');
                expect(res.video).to.have.lengthOf.at.least(1);
                expect(res.channel).to.be.an('array');
                expect(res.playlist).to.be.an('array');

                return done();
            }).catch(done);
        });
    });
});