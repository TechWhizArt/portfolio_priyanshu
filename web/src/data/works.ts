// 作品集数据（双语）。5 大板块 → 点击展开作品详情。
// 纯数据驱动：增删板块 / 作品只改本文件，Works.jsx 仅负责渲染。
//
// 板块字段：
//   id        唯一标识（用于 framer layoutId 共享元素动画）
//   no        编号 '01'…'05'
//   title     板块标题
//   tagline   索引行右侧一句话
//   items[]   扁平作品列表：{ name, meta?, tags?, link? }
//             点击 item 弹出全屏详情，可补充可选媒体/文案字段：
//             { image?, video?, year?, desc? }（缺省时媒体用占位、简介回退 meta/标签）
//   groups[]  分组作品（与 items 二选一）：{ heading, items: string[] }
//   awards[]  奖项 chip（可选）
//   footer    底部技术/备注一行（可选）

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export const WORKS: WorksLang = {
  
  
    title: 'Works',
    closeLabel: 'Back',
    openLabel: 'Explore',
    hint: 'Keep scrolling',
    awardsLabel: 'Awards',
    visitLabel: 'Visit site',
    detailPlaceholder: 'Your work description',
    phImageLabel: 'Image / Video',
    phButtonLabel: 'Link button',
    countLabel: (n : number) => `${n} works`,
    sections: [
      {
        id: 'ad',
        no: '01',
        title: '3D Models',
        tagline: '3D Modelling · Autodesk Maya',
        items: [
          { name: 'Creepy Levitation', meta: '', slug: 'creepy' },
          { name: 'Double Barrel Plasma Cannon', meta: '', slug: 'canon' },
          { name: 'Project NYX Sifi Bike', meta: '', slug: 'bike' },
          { name: 'Furosa- A Mad Max Saga', meta: '', slug: 'character' },
          { name: 'Other Works', slug: 'othermodels' },
        ],
        awards: ['Tiger Roar', 'FWA', 'Awwwards'],
      },
      {
        id: 'product',
        no: '02',
        title: 'Digital Art & Photography',
        tagline: 'Sketching · Illustration · Tattoo Design · Concept Art',
        items: [
          { name: 'Art Work', meta: '', link: 'https://www.instagram.com/priyanshwho.art/', slug: 'artwork' },
          { name: 'Photographs', meta: '', link: 'https://www.instagram.com/priyanshwhowithcamera/', slug: 'photography' }
        ],
      },
      {
        id: 'maker',
        no: '03',
        title: 'Advertising',
        tagline: 'Video Editing · Graphic Designing · Logo Design · Photography',
        items: [
          {
            name: 'I Edited these Videos for Advertising',
            meta: 'Video Editing',
            slug: 'editvdos',
          },
          {
            name: 'I designed these posters',
            meta: 'Graphic Design',
            slug: 'posters',
          },
          {
            name: 'I shot and edited these reels',
            meta: 'Photography',
            slug: 'switch-cat-house',
          },
          
        ],
        footer: 'footer',
      },
      
      {
        id: 'graphics',
        no: '04',
        title: 'Side Projects',
        tagline: 'Raymarching · WebGL · Blender',
        items: [
          { name: 'Stop Motion', slug: 'stopmotion' },
          { name: 'Animation', slug: 'animation' },
          { name: 'Certificates', slug: 'certificate' },
          { name: 'Other side projects', slug: 'othersideprojects' },
        ],
      },
    ],
  
}

// 板块配图（横向画廊每张卡片左侧的整高封面）。放到 public/works/covers/ 下。
// 缺图时左栏用大编号渐变占位，放入图片后自动点亮。
export const SECTION_COVERS: Record<string, string> = {
  ad: `${import.meta.env.BASE_URL}works/covers/model.jpg`,
  maker: `${import.meta.env.BASE_URL}works/covers/cafe.png`,
  product: `${import.meta.env.BASE_URL}works/covers/digiart.jpg`,
  graphics: `${import.meta.env.BASE_URL}works/covers/side.png`,
}

// 统计一个板块的作品数（items 或 groups 求和），用于索引行 hover 显示
export function sectionCount(section: WorkSection): number {
  if (section.items) return section.items.length
  if (section.groups) return section.groups.reduce((n, g) => n + g.items.length, 0)
  return 0
}
