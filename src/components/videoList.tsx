import { memo } from "react";
import { TikTokEmbed } from "react-social-media-embed";

function VideoList({ videos }: { videos: string[] }) {
    return (
        <div className="mt-2">
            {
                videos.map((link: string) => (
                    <div key={link}>
                        <TikTokEmbed
                            url={link}
                        />
                    </div>
                ))
            }
        </div>
    );
}

export default memo(VideoList)