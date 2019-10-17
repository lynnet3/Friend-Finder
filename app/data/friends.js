var people = [
    {
        name: "Ahmed",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores: [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },

    {
        name: "Milissa",
        photo: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fcba.ca%2FAssets%2FCBA%2FImages%2FArticle%2Ftiles%2Ftile_women.jpg&imgrefurl=https%3A%2F%2Fcba.ca%2Frepresentation-of-women-at-banks-in-canada&docid=64z_tHfjQf4jJM&tbnid=mah7lYXGPnpYgM%3A&vet=10ahUKEwin1I_Ug5_lAhUBZd8KHdHsDGwQMwiGASgLMAs..i&w=1120&h=720&bih=625&biw=1366&q=woman&ved=0ahUKEwin1I_Ug5_lAhUBZd8KHdHsDGwQMwiGASgLMAs&iact=mrc&uact=8",
        scores: [
            5,
            3,
            2,
            5,
            5,
            4,
            5,
            2,
            5,
            5
        ]
    },
    
    {
        name: "Asher",
        photo: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fassets.myntassets.com%2Fassets%2Fimages%2F1862801%2F2018%2F2%2F9%2F11518155061506-Roadster-Men-Maroon--Navy-Blue-Regular-Fit-Checked-Casual-Shirt-8861518155061131-1.jpg&imgrefurl=https%3A%2F%2Fwww.myntra.com%2Fmen-apparel-briefs-sports-sandals&docid=-778D5GgyiZdNM&tbnid=L4QvDRngiMWQrM%3A&vet=10ahUKEwjxicKLiJ_lAhWgUBUIHUWsBv4QMwivASglMCU..i&w=1080&h=1440&bih=625&biw=1366&q=men%20&ved=0ahUKEwjxicKLiJ_lAhWgUBUIHUWsBv4QMwivASglMCU&iact=mrc&uact=8",
        scores: [
            2,
            5,
            1,
            5,
            4,
            5,
            3,
            5,
            5,
            4
        ]
    },
    
    {
        name: "Julie",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F2b%2FJessica_Ennis_%2528May_2010%2529_cropped.jpg&imgrefurl=https%3A%2F%2Fen.wiktionary.org%2Fwiki%2Fwoman&docid=lksYvjZ21T5svM&tbnid=B_Sp0dyn1tylXM%3A&vet=10ahUKEwin1I_Ug5_lAhUBZd8KHdHsDGwQMwiEASgJMAk..i&w=559&h=878&bih=625&biw=1366&q=woman&ved=0ahUKEwin1I_Ug5_lAhUBZd8KHdHsDGwQMwiEASgJMAk&iact=mrc&uact=8",
        scores: [
            5,
            3,
            5,
            4,
            1,
            3,
            5,
            3,
            5,
            2
        ]
    },
    
    {
        name: "Jordan",
        photo: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.kmscalifornia-shop.com%2Fimages%2F666%2F9193093.jpg&imgrefurl=http%3A%2F%2Fwww.kmscalifornia-shop.com%2Fpolo-ralph-lauren-full-zip-lounge-sweatshirt-in-black-men-p-120.html&docid=odeQjzyNoIisXM&tbnid=dl5rP3fz2Huz6M%3A&vet=12ahUKEwjrpIyLiZ_lAhU4WRUIHY2RC144ZBAzKBswG3oECAEQHA..i&w=513&h=655&bih=625&biw=1366&q=black%20men&ved=2ahUKEwjrpIyLiZ_lAhU4WRUIHY2RC144ZBAzKBswG3oECAEQHA&iact=mrc&uact=8",
        scores: [
            4,
            3,
            3,
            2,
            3,
            4,
            5,
            5,
            5,
            1
        ]
    },
    
    {
        name: "Liz",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fichef.bbci.co.uk%2Fnews%2F660%2Fcpsprodpb%2F178DF%2Fproduction%2F_105197469_judith_dworks976976.jpg&imgrefurl=https%3A%2F%2Fwww.bbc.com%2Fnews%2Fstories-46883037&docid=ASxQGPreAQyr5M&tbnid=fi3vBrT6EZU1RM%3A&vet=12ahUKEwizpfvxhp_lAhVHTRUIHdloCP84ZBAzKBgwGHoECAEQGQ..i&w=660&h=660&bih=625&biw=1366&q=woman&ved=2ahUKEwizpfvxhp_lAhVHTRUIHdloCP84ZBAzKBgwGHoECAEQGQ&iact=mrc&uact=8",
        scores: [
            5,
            5,
            1,
            5,
            4,
            5,
            5,
            5,
            5,
            5
        ]
    },
    
    {
        name: "Ryan",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fhairstyleonpoint.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fd3d1ce0e5c3f25953dd9398a74872a581-e1444413641867.jpg&imgrefurl=https%3A%2F%2Fhairstyleonpoint.com%2Fthe-hottest-hairstyle-trends-for-black-men%2F&docid=7FKQFGv-ZypxkM&tbnid=9r0UITkGyrQQLM%3A&vet=10ahUKEwiy4ZbhiJ_lAhXshOAKHS0ZA84QMwjCASg6MDo..i&w=468&h=477&bih=625&biw=1366&q=black%20men&ved=0ahUKEwiy4ZbhiJ_lAhXshOAKHS0ZA84QMwjCASg6MDo&iact=mrc&uact=8",
        scores: [
            4,
            5,
            1,
            4,
            3,
            4,
            4,
            4,
            5,
            5
        ]
    },
    
    {
        name: "Emily",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F6c%2Fba%2Fb7%2F6cbab740ad558210b76ecb3bf4ee948b.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F428686458250989131%2F&docid=xWyvCiK9pXrsoM&tbnid=iy7L3EQw4k3njM%3A&vet=10ahUKEwjb5rCuh5_lAhV1SxUIHdU0BJQQMwhYKAUwBQ..i&w=500&h=332&bih=625&biw=1366&q=rottweiler%20with%20sunglasses&ved=0ahUKEwjb5rCuh5_lAhV1SxUIHdU0BJQQMwhYKAUwBQ&iact=mrc&uact=8",
        scores:[
            2,
            5,
            1,
            5,
            5,
            5,
            2,
            5,
            5,
            5
        ]
    },

    {
        name:"Sammy",
        photo:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fi2-prod.essexlive.news%2Fincoming%2Farticle3203008.ece%2FALTERNATES%2Fs615%2F0_Mark-Hill-The-Mane-Event-Photocall-LFW-September-2018.jpg&imgrefurl=https%3A%2F%2Fwww.essexlive.news%2Fnews%2Fessex-news%2Ftop-25-sexiest-women-essex-3202915&docid=nzR3AUXP1Ch40M&tbnid=auxbLCQ52DPMyM%3A&vet=10ahUKEwi90vO9oZ_lAhUNSq0KHc0fAEAQMwioASgdMB0..i&w=615&h=409&bih=625&biw=1366&q=woman&ved=0ahUKEwi90vO9oZ_lAhUNSq0KHc0fAEAQMwioASgdMB0&iact=mrc&uact=8",
        scores:[
            5,
            3,
            2,
            5,
            3,
            5,
            5,
            3,
            4,
            4
        ]
    }
]