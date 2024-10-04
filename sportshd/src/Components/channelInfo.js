
const channelInfo = [{
    id: 1,
    name: 'Star Sports 1',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/e_background_removal/b_rgb:FFFFFF/c_pad,w_600,h_600,f_png/v1727973198/star_sports1.png',
    url: '/star-sports',
    iframe: '<iframe src="//stream.crichd.sc/update/star.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media">'
},
{
    id: 2,
    name: 'Star Sports Hindi',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/c_pad,w_800,h_800/v1728027925/star_sports_hindi_dqsamn.jpg',
    url: '/star-sports-hindi',
    iframe: '<iframe src="//stream.crichd.sc/update/star1hi.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
},
{
    id: 3,
    name: 'PTV Sports',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/b_rgb:FFFFFF/c_pad,w_800,h_800/v1727973198/pngwing.com_vjc2ha.png',
    url: '/ptv-sports',
    iframe: '<iframe src="//stream.crichd.sc/update/ptv.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
},
{
    id: 4,
    name: 'Willow HD',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/b_rgb:FFFFFF/c_pad,w_800,h_800/v1727973198/pngwing.com_1_ajawvt.png',
    url: '/willow-hd',
    iframe: '<iframe src="//stream.crichd.sc/update/willowcricket.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
},
{
    id: 5,
    name: 'Super Sports',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/e_background_removal/b_rgb:FFFFFF/c_pad,w_800,h_800,f_png/v1727973197/super-sport-hd-logo_mmjatl.png',
    url: '/super-sports',
    iframe: '<iframe src="//stream.crichd.sc/update/sscricket.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
},
{
    id: 6,
    name: 'Ten Sports',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/v1694660323/Ten-Sports-Logo-Vector_vbtjnv.jpg',
    url: '/ten-sports',
    iframe: '<iframe src="//stream.crichd.sc/update/tensp.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
},
{
    id: 7,
    name: 'Willow Extra',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/b_rgb:FFFFFF/c_pad,w_800,h_800/v1727973196/Willow_Xtra_tdyhi8.jpg',
    url: '/willow-extra',
    iframe: '<iframe src="//stream.crichd.sc/update/willowextra.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
},
{
    id: 8,
    name: 'ASports HD',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/b_rgb:FFFFFF/c_pad,w_800,h_800/v1727973197/A_Sports_Logo_suuj9u.png',
    url: '/asports-hd',
    iframe: '<iframe src="//stream.crichd.sc/update/asportshd.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
},
{
    id: 9,
    name: 'Fox Cricket',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/b_rgb:FFFFFF/c_pad,w_800,h_800/v1727973197/fox_cricket_llerot.png',
    url: '/fox-cricket',
    iframe: '<iframe src="//stream.crichd.sc/update/fox501.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
},
{
    id: 10,
    name: 'SkySports ME',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/v1694660323/sky-sports-mainevent_d5fnda.jpg',
    url: '/skysports-mainevent',
    iframe: '<iframe src="//stream.crichd.sc/update/skys1.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
},
{
    id: 11,
    name: 'SkySports Cricket',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/v1694660322/sky-sports-cricket_ygyu0k.jpg',
    url: '/skysports-cricket',
    iframe: '<iframe src="//stream.crichd.sc/update/skys2.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
},
{
    id: 12,
    name: 'SkySports Action',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/v1694660322/sky-sports-action_selhly.png',
    url: '/skysports-action',
    iframe: '<iframe src="//stream.crichd.sc/update/skys3.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
},
{
    id: 13,
    name: 'SkySports Golf',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/v1694660323/sky-sports-golf_nnwxlo.jpg',
    url: '/skysports-golf',
    iframe: '<iframe src="//stream.crichd.sc/update/skys4.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
},
{
    id: 14,
    name: 'SkySports PL',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/v1694660322/sky-sports-pl_bbzqrl.png',
    url: '/skysports-premier-league',
    iframe: '<iframe src="//stream.crichd.sc/update/skys5.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
}]

export default channelInfo