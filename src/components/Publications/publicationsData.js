import { publicationImages } from '../../assets/images/index';

const publicationsData = [
    {
        id: 1,
        image: publicationImages?.pairProgrammingImg,
        imageAlt: "pair programming picture alt",
        title: "How Pairing by Code Similarity Influences Discussions in Peer Learning",
        authors: "Shiyu Xu, Ashley Ge Zhang, Steve Oney",
        journal: "CHI 2023 Late-Breaking Work",
        description: "This paper investigates how grouping students with similar or different coding solutions impacts the quality of discussions " +
            "in peer learning within programming courses, aiming to identify the most effective grouping strategies to enhance student learning outcomes.",
        url: "https://dl.acm.org/doi/full/10.1145/3544549.3585837",
        PDF: "./"
    },
    {
        id: 2,
        image: publicationImages?.smartHomeImg, // Dynamically assigning image based on the id
        title: "\"It would probably turn into a social faux-pas\": Users’ and Bystanders’ Preferences of Privacy Awareness Mechanisms in Smart Homes",
        authors: "PK Thakkar, S He, S Xu, DY Huang, Y Yao",
        journal: "CHI 2022",
        description: "This research explored how to effectively deliver privacy-related notifications in smart homes to both users and bystanders. " +
            "By surveying 136 users and 123 bystanders, the study examined their preferences for receiving privacy notifications and evaluated four mechanisms to increase privacy awareness, " +
            "such as Data Dashboards and Ambient Light.",
        url: "https://dl.acm.org/doi/abs/10.1145/3491102.3502137"
    }
];

export default publicationsData;
