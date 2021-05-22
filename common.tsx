// 블로그 제목
const HEADER_TITLE: string = "Humanwater";

// 블로그 헤더 메뉴
interface headerMenusElemInterface {    
    title: string,
    link: string,
}
const HEADER_MENUS:Array<headerMenusElemInterface> = [ 
    {
        title: "Intro",
        link: "/intro",
    },
    {
        title: "Post",
        link: "/post",
    },
    {
        title: "About",
        link: "/about",
    } 
];

module.exports = { 
        HEADER_TITLE,
        HEADER_MENUS,
}
