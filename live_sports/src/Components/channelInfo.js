
const channelInfo = [{
    id: 1,
    name: 'Star Sports 1',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/v1694660326/Star_Sports_1_tstruf.webp',
    url: '/star-sports',
    iframe: '<iframe src="//stream.crichd.vip/update/star.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media">'
},
{
    id: 2,
    name: 'Star Sports Hindi',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/v1694660323/SS1Hindi_snjouk.webp',
    url: '/star-sports-hindi',
    iframe: '<iframe src="//stream.crichd.vip/update/star1hi.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
},
{
    id: 3,
    name: 'PTV Sports',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/v1694660322/ptv-sports_oaoxq7.png',
    url: '/ptv-sports',
    iframe: '<iframe src="//stream.crichd.vip/update/ptv.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
},
{
    id: 4,
    name: 'Willow HD',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/v1694660327/willow-logo_fuauus.jpg',
    url: '/willow-hd',
    iframe: '<iframe src="//stream.crichd.vip/update/willowcricket.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
},
{
    id: 5,
    name: 'Super Sports',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/v1694660326/super-sports-cricket_e3cjha.png',
    url: '/super-sports',
    iframe: '<iframe src="//stream.crichd.vip/update/sscricket.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
},
{
    id: 6,
    name: 'Ten Sports',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/v1694660323/Ten-Sports-Logo-Vector_vbtjnv.jpg',
    url: '/ten-sports',
    iframe: '<iframe src="//stream.crichd.vip/update/tensp.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
},
{
    id: 7,
    name: 'Willow Extra',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/v1694660326/Willow-Xtra_bchht4.jpg',
    url: '/willow-extra',
    iframe: '<iframe src="//stream.crichd.vip/update/willowextra.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
},
{
    id: 8,
    name: 'ASports HD',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/v1694660323/A_Sports_Logo_v0pc3q.png',
    url: '/asports-hd',
    iframe: '<iframe src="//stream.crichd.vip/update/asportshd.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
},
{
    id: 9,
    name: 'Fox Cricket',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/v1694660323/fox-sports_wit87q.webp',
    url: '/fox-cricket',
    iframe: '<iframe src="//stream.crichd.vip/update/fox501.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
},
{
    id: 10,
    name: 'SkySports ME',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/v1694660323/sky-sports-mainevent_d5fnda.jpg',
    url: '/skysports-mainevent',
    iframe: '<iframe src="//stream.crichd.vip/update/skys1.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
},
{
    id: 11,
    name: 'SkySports Cricket',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/v1694660322/sky-sports-cricket_ygyu0k.jpg',
    url: '/skysports-cricket',
    iframe: '<iframe src="//stream.crichd.vip/update/skys2.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
},
{
    id: 12,
    name: 'SkySports Action',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/v1694660322/sky-sports-action_selhly.png',
    url: '/skysports-action',
    iframe: '<iframe src="//stream.crichd.vip/update/skys3.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
},
{
    id: 13,
    name: 'SkySports Golf',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/v1694660323/sky-sports-golf_nnwxlo.jpg',
    url: '/skysports-golf',
    iframe: '<iframe src="//stream.crichd.vip/update/skys4.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
},
{
    id: 14,
    name: 'SkySports PL',
    img: 'https://res.cloudinary.com/djecqwc0z/image/upload/v1694660322/sky-sports-pl_bbzqrl.png',
    url: '/skysports-premier-league',
    iframe: '<iframe src="//stream.crichd.vip/update/skys5.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
}]

export default channelInfo