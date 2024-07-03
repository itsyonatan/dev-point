import images from "./images";

// skills
const skills = [
    {
        title: "UI/UX DESIGN",
        value: "80%"
    },
    {
        title: "WEB DEVELOPMENT",
        value: "75%"
    },
    {
        title: "APP DEVELOPMENT",
        value: "45%"
    },
    {
        title: "MARKETING",
        value: "15%"
    },
];

// stats
const stats = [
    {
        img: `${images.icon_briefcase}`,
        value:  58,
        title: "projects completed"
    },
    {
        img: `${images.icon_clock}`,
        value: 1465,
        title: "working hours"
    },
    {
        img: `${images.icon_star_white}`,
        value: 62,
        title: "positive feedbacks"
    },
    {
        img: `${images.icon_heart}`,
        value: 75,
        title: "happy clients"
    },
];

// works
const works = [
  {
    img: `${images.work_1}`
  },
  {
    img: `${images.work_2}`
  },
  {
    img: `${images.work_3}`
  },
  {
    img: `${images.work_4}`
  },
  {
    img: `${images.work_5}`
  },
  {
    img: `${images.work_6}`
  },
  {
    img: `${images.work_7}`
  },
  {
    img: `${images.work_8}`
  }
]

// services
const services = [
    {
        img: `${images.icon_diamond}`,
        title: "UI / UX DESIGN",
        text: 'Crafting intuitive and engaging UI / UX designs for all users.'
    },
    {
        img: `${images.icon_archer}`,
        title: "WEB DEVELOPMENT",
        text: 'Creating stunning, responsive websites to boost your online presence.'
    },
    {
        img: `${images.icon_phone}`,
        title: "APP / MOBILE",
        text: 'Building seamless and innovative mobile app experiences.'
    },
    {
        img: `${images.icon_console}`,
        title: "GAME DESIGN",
        text: 'Creating engaging experiences through story, characters, and gameplay.'
    },
    {
        img: `${images.icon_plane}`,
        title: "SEO / MARKETING",
        text: 'Driving digital growth through strategic SEO and marketing.'
    },
    {
        img: `${images.icon_star}`,
        title: "PHOTOGRAPHY",
        text: 'Capturing moments, revealing emotions through photography.'
    },
    {
        img: `${images.icon_fantasy}`,
        title: "GRAPHIC DESIGN",
        text: 'Visual storytelling through creative design solutions.'
    },
    {
        img: `${images.icon_paint}`,
        title: "ILLUSTRATIONS",
        text: 'Captivating visual narratives through imaginative illustration design'
    }
];

// testimonials
const testimonials = [
    {
        name: "Christine Troughton, BPTC Officer",
        text: "The staff and support are second to none. They are polished, proficient, accessible and patient.",
    },
    {
        name: "Michael Hopkins",
        text: "Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap."
    },
    {
        name: "Terry Overacker",
        text: "We completed our product website with Dev.Point and are so excited to have it live!! It is so professionally done and eye appealing, not to mention how great it looks and works. We love how easy it is to make changes ourselves, yet know we have the support when/if we need it."
    },
    {
        name: "Tim K. & Kristen H.",
        text: "When you choose Dev.Point you get a wonderful, professional team with innovative ideas, awesome customer service, and exactly what you're looking for. It took the ideas that we had and put them perfecly on the web."
    }
];

const data = {skills, stats, works, services, testimonials};
export default data;
