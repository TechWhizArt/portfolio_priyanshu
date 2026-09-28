
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
        tagline: 'Illustration · Digital Sketch · Frames',
        items: [
          { name: 'Art Work', meta: '', link: 'https://www.instagram.com/priyanshwho.art/', slug: 'artwork' },
          { name: 'Photographs', meta: '', link: 'https://www.instagram.com/priyanshwhowithcamera/', slug: 'photography' }
        ],
      },
      {
        id: 'maker',
        no: '03',
        title: 'Advertising',
        tagline: 'Designs · Banners · Reels',
        items: [
          {
            name: 'I Edited these Videos for Advertising',
            meta: '',
            slug: 'editvdos',
          },
          {
            name: 'I designed these posters',
            meta: '',
            slug: 'posters',
          },
          
          
          
        ],
        footer: 'Designed to leave a mark',
      },
      
      {
        id: 'graphics',
        no: '04',
        title: 'Side Projects',
        tagline: 'Stop Motion · Animation · Nuke ',
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
  maker: `${import.meta.env.BASE_URL}works/covers/advcover.jpeg`,
  product: `${import.meta.env.BASE_URL}works/covers/digiartcover.jpeg`,
  graphics: `${import.meta.env.BASE_URL}works/covers/sidecover.jpeg`,
}

// 统计一个板块的作品数（items 或 groups 求和），用于索引行 hover 显示
export function sectionCount(section: WorkSection): number {
  if (section.items) return section.items.length
  if (section.groups) return section.groups.reduce((n, g) => n + g.items.length, 0)
  return 0
}

