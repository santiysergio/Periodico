export type Image = {
    src: string;
    alt?: string;
};

export type Link = {
    href: string;
    text: string;
};

export type SocialLink = Link & {
    icon: 'codepen' | 'dev' | 'facebook' | 'github' | 'instagram' | 'linkedin' | 'medium' | 'x-twitter';
};

export type Hero = {
    title?: string;
    text?: string;
    avatar?: Image;
    backgroundImage?: Image;
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    primaryNavLinks?: Link[];
    secondaryNavLinks?: Link[];
    socialLinks?: SocialLink[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
};

const siteConfig: SiteConfig = {
    logo: {
        src: 'https://iesmartinezm.es/wp-content/uploads/2020/04/logo-mm-gsuite-tiny.png',
        alt: 'ies martinez montañez'
    },
    title: 'Ies Martinez Montañez',
    description: 'Periodico Ies martinez Montañez',
    image: {
        src: 'https://iesmartinezm.es/wp-content/uploads/2020/04/logo-mm-gsuite-tiny.png',
        alt: 'Periodico Ies martinez Montañez '
    },
    primaryNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    secondaryNavLinks: [

        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [

        {
            text: 'Follow on Instagram',
            href: 'https://instagram.com/',
            icon: 'instagram'
        },
        {
            text: 'Follow on X',
            href: 'https://twitter.com/',
            icon: 'x-twitter'
        }
    ],
    hero: {
        title: 'Hola',
        text: "esta es la web de el periodico del Ies Martinez Montañez.",
        avatar: {
            src: 'https://iesmartinezm.es/wp-content/uploads/2020/04/logo-mm-gsuite-tiny.png',
            alt: 'Ies martinez Montañez'
        },
        backgroundImage: {
            src: '/hero.webp'
        }
    }
};

export default siteConfig;
