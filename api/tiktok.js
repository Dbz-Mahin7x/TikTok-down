const axios = require('axios');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    });
  }

  const { url } = req.query;

  if (!url) {
    return res.status(400).json({
      success: false,
      error: 'TikTok URL is required'
    });
  }

  if (!url.includes('tiktok.com')) {
    return res.status(400).json({
      success: false,
      error: 'Invalid TikTok URL'
    });
  }

  try {
    console.log(`🎵 Processing: ${url}`);

    // Using TikWM API (Most reliable, no key needed)
    const tikwmUrl = `https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`;
    
    const response = await axios.get(tikwmUrl, {
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://www.tikwm.com/',
        'Origin': 'https://www.tikwm.com'
      }
    });

    const data = response.data;

    // Check if API returned success
    if (data.code !== 0 || !data.data) {
      return res.status(404).json({
        success: false,
        error: 'Could not fetch video. The video might be private or deleted.'
      });
    }

    const d = data.data;

    // Format the response beautifully
    res.json({
      success: true,
      platform: 'tiktok',
      video: {
        no_watermark: d.play,
        with_watermark: d.wmplay,
        hd: d.hdplay || d.play,
        music: d.music,
        cover: d.cover,
        dynamic_cover: d.dynamic_cover,
        origin_cover: d.origin_cover
      },
      metadata: {
        id: d.id,
        title: d.title,
        duration: d.duration,
        region: d.region,
        create_time: d.create_time,
        size: d.size,
        video_length: d.video_length
      },
      author: {
        id: d.author?.id,
        unique_id: d.author?.unique_id,
        nickname: d.author?.nickname,
        avatar: d.author?.avatar,
        signature: d.author?.signature,
        verified: d.author?.verified,
        following: d.author?.following,
        followers: d.author?.follower_count,
        hearts: d.author?.heart_count,
        videos: d.author?.video_count
      },
      stats: {
        plays: d.play_count,
        likes: d.digg_count,
        comments: d.comment_count,
        shares: d.share_count,
        downloads: d.download_count,
        collects: d.collect_count
      },
      music_info: {
        id: d.music_info?.id,
        title: d.music_info?.title,
        author: d.music_info?.author,
        duration: d.music_info?.duration,
        cover: d.music_info?.cover,
        play_url: d.music_info?.play
      }
    });

  } catch (error) {
    console.error('TikTok API error:', error.message);
    
    res.status(500).json({
      success: false,
      error: 'Failed to fetch video: ' + error.message
    });
  }
};