import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Nav from "./Nav";

const ImageComponent = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={className}
    onError={(e) => {
      e.target.onerror = null;
      e.target.src = '/default-avatar.png';
    }}
  />
);
const getLinkedInUrl = (name, currentCompany = "35670522") => {
  return `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(name)}&%5B${currentCompany}`;
};

const teamStructure = [
  {
    category: "Heads",
    members: [
      {
        name: "Shivraj Talekar",
        role: "Head",
        team: "Marketing & Secretariat",
        class: "TY CSD",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQG_aju367-Zeg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1730391382585?e=1747872000&v=beta&t=Im1c9GrgnGMmGr1JpLRwpnnlHNdCV_rNnXQwLI3UCa4",
        leads: [
          {
            name: "Sahil Patil",
            role: "Marketing Team Lead",
            class: "SY Computer",
            image: "https://example.com/images/sahil.jpg", // Added image URL
            teamMembers: [
              { name: "Pankaj Marathe", role: "Marketing Team Member", class: "TY AIDS", image: "https://media.licdn.com/dms/image/v2/D5603AQEkP-thfzNCMg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1706725817651?e=1747872000&v=beta&t=lu5sZXTWBrl1T29Qur48SoFdT2HQCzoEpBCbcOwBmRU" }, // Added image URL
              { name: "Sharyu Kekane", role: "Marketing Team Member", class: "SY CSD", image: "https://media.licdn.com/dms/image/v2/D4D03AQF5awoKVfL9Pw/profile-displayphoto-shrink_100_100/B4DZVp.nOyHwAU-/0/1741239777118?e=1747872000&v=beta&t=Vx48qoJS8CdLCyTF-dzyMIEc4BIClvjbYmZbQt-EA_s" }, // Added image URL
              { name: "Rajesh Khavane", role: "Marketing Team Member", class: "TY AIDS", image: "https://media.licdn.com/dms/image/v2/D5603AQElVWdWlus50Q/profile-displayphoto-shrink_100_100/B56ZT109WMHQAU-/0/1739291091152?e=1747872000&v=beta&t=jr4xGBbcMXL1J7zFbUxDwc7_RslPq5IM_hBFsYg87H0" }, // Added image URL
              { name: "Samwad Pohare", role: "Marketing Team Member", class: "TY Computer", image: "https://media.licdn.com/dms/image/v2/D5603AQHbVGOi6zA5gw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1686824178803?e=1747872000&v=beta&t=DWHQVfy0K3nKfjmYXnUW-myBru3zyon3s2hfDywDYVo" }, // Added image URL
              { name: "Abhishek Malajangam", role: "Marketing Team Member", class: "TY Computer", image: "https://example.com/images/abhishek.jpg" } // Added image URL
            ]
          },
          {
            name: "Ayushi Deore",
            role: "Secretariat Team Lead",
            class: "SY CSD",
            image: "https://media.licdn.com/dms/image/v2/D4D03AQEY86xcqoslUw/profile-displayphoto-shrink_100_100/B4DZTgr3caHIAU-/0/1738936384630?e=1747872000&v=beta&t=XxOI4XJ_PDkS9oBHqGSVFzw3bfImzHo9qyBQuYCIOBI", // Added image URL
            teamMembers: [
              { name: "Atmaja Aware", role: "Secretariat Team Member", class: "TY CSD", image: "https://media.licdn.com/dms/image/v2/D5603AQGAl5TJhX33Eg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1709532500533?e=1747872000&v=beta&t=QcDsB1XWYEyguFMFomTPe4ww8XF1pdABP63ZUGrESOc" }, // Added image URL
              { name: "Vidhee Patwa", role: "Secretariat Team Member", class: "TY AIDS", image: "https://media.licdn.com/dms/image/v2/D4D35AQHrIDsn6_8ARQ/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1715174753347?e=1742713200&v=beta&t=L0OrBlpiVM88Xr2oSTeW4a1uN6SnFD7Ze6H29S9o2LU" }, // Added image URL
              { name: "Aryan Suryawanshi", role: "Secretariat Team Member", class: "SY AIDS", image: "https://example.com/images/aryan.jpg" }, // Added image URL
              { name: "Samruddhi Narkhede", role: "Secretariat Team Member", class: "TY Computer", image: "https://example.com/images/samruddhi.jpg" } // Added image URL
            ]
          }
        ]
      },
      {
        name: "Kundan Suryawanshi",
        role: "Head",
        team: "Logistics & EPM",
        class: "TY AIDS",
        image: "https://media.licdn.com/dms/image/v2/D5603AQFSUIwS7k3Szg/profile-displayphoto-shrink_100_100/B56ZUE3mWEGsAY-/0/1739543439227?e=1747872000&v=beta&t=RhhafLjhBt3TxUELAJcC-G6-mz0yRw4N23wQGOL8bOo",
        leads: [
          {
            name: "Dhanashri Patil",
            role: "Logistics Team Lead",
            class: "TY AIDS",
            image: "https://media.licdn.com/dms/image/v2/D4D03AQEU2WN8gh_zyg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1710817514496?e=1747872000&v=beta&t=c5qM5QSl2C0leu88uVc3p1PLGu1YbK1uYBNUlvvU6vI", // Added image URL
            teamMembers: [
              { name: "Abhushan Bokade", role: "Logistics & EPM Team Member", class: "SY CSD", image: "https://media.licdn.com/dms/image/v2/D4E03AQG-oJdaW-mHCQ/profile-displayphoto-shrink_100_100/B4EZR.eHgAGcAU-/0/1737288613175?e=1747872000&v=beta&t=M3IhHugSMjYO6Lx_XUINNCfGktP2U7D_xuYsq3r76rI" }, // Added image URL
              { name: "Siya Chavan", role: "Logistics & EPM Team Member", class: "TY AIDS", image: "https://media.licdn.com/dms/image/v2/D4D03AQGr24aE6-_HAQ/profile-displayphoto-shrink_100_100/B4DZTVphFsHYAY-/0/1738751231852?e=1747872000&v=beta&t=pR6BUET4y-dI8xHnmFhuzGaLtpGuC0IOId3-_yzmrQE" }, // Added image URL
              { name: "Sadique Khatib", role: "Logistics & EPM Team Member", class: "SY CSD", image: "https://example.com/images/sadique.jpg" }, // Added image URL
              { name: "Anuj Suryawanshi", role: "Logistics & EPM Team Member", class: "SY CSD", image: "https://media.licdn.com/dms/image/v2/D4D35AQHILUGuNrP0mQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1721576199016?e=1742716800&v=beta&t=h4m1-cQNgwPj9Hu68BdrQ5Wb0408n1BG8VwT0i9uV3Q" }, // Added image URL
              { name: "Sanket Chaudhari", role: "Logistics & EPM Team Member", class: "TY AIDS", image: "https://media.licdn.com/dms/image/v2/D5603AQF8JyJxIiL1-g/profile-displayphoto-shrink_400_400/B56ZSEM1ZPGsAk-/0/1737384745698?e=1747872000&v=beta&t=Tl5jSkZMP3npwmnyAeWTWImYMmM9F1q-ixncY8qApcw" }, // Added image URL
              { name: "Nishant Bhise", role: "Logistics & EPM Team Member", class: "TY AIDS", image: "https://media.licdn.com/dms/image/v2/D5603AQFmJFdJ7GOskA/profile-displayphoto-shrink_400_400/B56ZTUSYdVGUAg-/0/1738728376666?e=1747872000&v=beta&t=8EFZzZWpvdutWS-Dt4hvx_AKDfX8p0tYZH73Qkpvm1E" }, // Added image URL
              { name: "Vedant Sonawane", role: "Logistics & EPM Team Member", class: "SY CSD", image: "https://media.licdn.com/dms/image/v2/D4E03AQECfsw_-j0Shg/profile-displayphoto-shrink_400_400/B4EZVnvKHMHcAg-/0/1741202173250?e=1747872000&v=beta&t=OA8YE9mg_mskNWLfWbw7b9xtaulgXtqWP4I-ePjWfvM" }, // Added image URL
              { name: "Sarthak Tisgaonkar", role: "Logistics & EPM Team Member", class: "TY AIDS", image: "https://media.licdn.com/dms/image/v2/C5603AQFrjYl_CO0lRQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1599740701857?e=1747872000&v=beta&t=gDSMVfia1GVXTWhJx4lTGfnIG6g1_Cp79HXW0mqUXuY" } // Added image URL
            ]
          },
          {
            name: "Anjas Vaidya",
            role: "Food Team Lead",
            class: "TY AIDS",
            image: "https://media.licdn.com/dms/image/v2/D4D35AQEOvkhKYiGXYw/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1727076832616?e=1742716800&v=beta&t=KjX6ABwAe1AokQW6CUmakVuST6xZQiXxeaasCL75ONg", // Added image URL
            teamMembers: [
              { name: "Krushna Malwatkar", role: "Food Team Member", class: "TY AIDS", image: "https://media.licdn.com/dms/image/v2/D5603AQHBn7E49RM2tw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1706852268984?e=1747872000&v=beta&t=b4ZnLORpVWFcexIRxG-oSUU6S6la8cAd2FxkPpORfaE" }, // Added image URL
              { name: "Vaibhav Salegave", role: "Food Team Member", class: "TY AIDS", image: "https://example.com/images/vaibhav.jpg" }, // Added image URL
              { name: "Akshay Saindane", role: "Food Team Member", class: "SY CSD", image: "https://media.licdn.com/dms/image/v2/D4D03AQHTQV7R9jet-w/profile-displayphoto-shrink_100_100/B4DZVpOUWeHYAU-/0/1741227117604?e=1747872000&v=beta&t=EfHdONUNTRdKwY4FeA1TSwEcapsFKDUYrgPT_Pgq1t4" }, // Added image URL
              { name: "Abhushan Bokade", role: "Food Team Member", class: "SY CSD", image: "https://media.licdn.com/dms/image/v2/D4E03AQG-oJdaW-mHCQ/profile-displayphoto-shrink_100_100/B4EZR.eHgAGcAU-/0/1737288613175?e=1747872000&v=beta&t=M3IhHugSMjYO6Lx_XUINNCfGktP2U7D_xuYsq3r76rI" } // Added image URL
            ]
          }
        ]
      },
      {
        name: "Samyak Raka",
        role: "Head",
        team: "Hackathon Operations",
        class: "TY Computer",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQHJsyE8fvU0Hw/profile-displayphoto-shrink_100_100/B4DZPlNV.0HwAY-/0/1734717301784?e=1747872000&v=beta&t=g5jhbAImkiuGJUITVca7TgsgljWVbRjZNkQARleKgSA",
        leads: [
          {
            name: "Sarth Satpute",
            role: "Hackathon Operations Lead",
            class: "TY Computer",
            image: "https://media.licdn.com/dms/image/v2/D4D03AQHavXJ3Z-osGg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1727195065494?e=1747872000&v=beta&t=mjTOrNiThcG7lFxCQltzjr4-IOKRyaUpjbhEHtZ0ZRQ", // Added image URL
            teamMembers: [
              { name: "Anup Patil", role: "Hackathon Operations Team Member", class: "SY Computer", image: "https://media.licdn.com/dms/image/v2/D4D03AQGMcJ-Hze7Nmg/profile-displayphoto-shrink_100_100/B4DZQYlZWkHcAU-/0/1735579245297?e=1747872000&v=beta&t=_DdaOYaxhRxWqncoeqVpwfMmHx2vvzsq7MSnazq5x50" }, // Added image URL
              { name: "Shaikh Mohammad Zaid Sarfaraz", role: "Hackathon Operations Team Member", class: "SY AIDS", image: "https://example.com/images/shaikh.jpg" }, // Added image URL
              { name: "Aachal Patani", role: "Hackathon Operations Team Member", class: "TY Computer", image: "https://media.licdn.com/dms/image/v2/D4D03AQEp3wdFTxEBug/profile-displayphoto-shrink_100_100/B4DZVbWQdfHAAU-/0/1740994324101?e=1747872000&v=beta&t=4w0WHpJ3gf4dfWshYyxkPVB0ENF2ULDVoPkcWkjfRZ8" }, // Added image URL
              { name: "Dhruv Mehta", role: "Hackathon Operations Team Member", class: "SY Computer", image: "https://media.licdn.com/dms/image/v2/D4D03AQEeru6aD36dzg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1729010085251?e=1747872000&v=beta&t=bfkBtQQGeGPNg-_AoGygIqQHekfTNuld_vnP7O5qtBs" } // Added image URL
            ]
          }
        ]
      },
      {
        name: "Ashish Nagmoti",
        role: "Head",
        team: "Web & IT",
        image: "https://media.licdn.com/dms/image/v2/D4D35AQGc5wUDEKFaIw/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1709871131781?e=1742716800&v=beta&t=YMYfbrN8s1baswLY3M_do9xkdaNW7srqQT522AupiVo",
        leads: [
          {
            name: "Aniket More",
            role: "Web Team Lead",
            image: "https://media.licdn.com/dms/image/v2/D5635AQG5Db-_G2iaXA/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1738487354692?e=1742716800&v=beta&t=yLtSAN18pcLSW4OeJnG5Ab6EZLawEO0qQyFu8MdIBAg", // Added image URL
            teamMembers: [
              { name: "Tejas Nanoti", role: "Web Team Member", image: "https://media.licdn.com/dms/image/v2/D4D03AQF4A6EanXKgXQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1728615443409?e=1747872000&v=beta&t=fr7A3GrfEhIJJFj799zhMiy6jPqmLUDJWQIHHAkZ0Nw" }, // Added image URL
              { name: "Suraj Mande", role: "Web Team Member", image: "https://media.licdn.com/dms/image/v2/D4E03AQGeR6hC_VhlGg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1706830102998?e=1747872000&v=beta&t=Th6WcTMOze8emXZNJ1y68xW8FLLQ96ckk2E0_eK_dYA" } // Added image URL
            ]
          },
          {
            name: "Prasad Desale",
            role: "IT Team Lead",
            image: "https://example.com/images/prasad.jpg", // Added image URL
            teamMembers: [
              { name: "Om Vitthal Patil", role: "IT Team Member", image: "https://media.licdn.com/dms/image/v2/D4D03AQGJZ1cJ--QSYQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720776507351?e=1747872000&v=beta&t=u9fOs9SxpR9Th70AqSd3jpCqvM83nNyRAMuclR_Eh4A" }, // Added image URL
              { name: "Harsh Agnani", role: "IT Team Member", image: "https://media.licdn.com/dms/image/v2/D4D03AQEOK-UK0i3b-Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1708325500867?e=1747872000&v=beta&t=N6KR795K9IPHqXjX9M721kM94xEiO-T9lxr5vu6zE3s" } // Added image URL
            ]
          }
        ]
      },
      {
        name: "Aditya Ahirrao",
        role: "Head",
        team: "Design & Branding",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQFhPfo-neI6LA/profile-displayphoto-shrink_100_100/B4DZWTTV._G4AY-/0/1741933077906?e=1747872000&v=beta&t=qWk68ZTy5nVpuCZ5Tkb3jXW1523zbPpMBK5URlYI7Fc",
        leads: [
          {
            name: "Rasika Mhaske",
            role: "Design Team Lead",
            image: "https://media.licdn.com/dms/image/v2/D4D03AQFqA3p9QroRyw/profile-displayphoto-shrink_100_100/B4DZV14F3.GkAU-/0/1741439400247?e=1747872000&v=beta&t=QDF5jDljPq3mBYJ4NnOJ7qMHTqsPmEilt8OkTMiAIUY", // Added image URL
            teamMembers: [
              { name: "Siddhi Brahmankar", role: "Design Team Member", image: "https://example.com/images/siddhi.jpg" }, // Added image URL
              { name: "Pratiksha Khandbahale", role: "Design Team Member", image: "https://example.com/images/pratiksha.jpg" }, // Added image URL
              { name: "Khushi Kshatriya", role: "Design Team Member", image: "https://media.licdn.com/dms/image/v2/D4D03AQENixO-6X6ELg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1668690802259?e=1747872000&v=beta&t=G_qzvfCkzlWSfuyy1RvlzqihHB4GlzVSgMcoJBFWO-4" }, // Added image URL
              { name: "Sneha Mohanty", role: "Design Team Member", image: "https://media.licdn.com/dms/image/v2/D4E03AQH4O414unFQBA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1668684936315?e=1747872000&v=beta&t=RDWvpumlkGBAXQ5K6Uvhi5OqeBIFa4Nn1OtvbqolD6g" } // Added image URL
            ]
          },
          {
            name: "Sujay Padvi",
            role: "Filmography Team Lead",
            image: "https://media.licdn.com/dms/image/v2/D4D03AQF8X1dNDyE_BQ/profile-displayphoto-shrink_100_100/B4DZTmyUKnHAAU-/0/1739038737719?e=1747872000&v=beta&t=xg69GAqhLPMM9SSxMulmhKd4fDkFR7vVFrW0k--bRZE", // Added image URL
            teamMembers: [
              { name: "Deepali Patil", role: "Filmography Team Member", image: "https://media.licdn.com/dms/image/v2/D5603AQHPWkyUAeAd_Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1697814728596?e=1747872000&v=beta&t=7xxFotIlpCllJUEIIjAgL0zsRWSGjdm7s8lVZdGdVWk" }, // Added image URL
              { name: "Avanti Patil", role: "Filmography Team Member", image: "https://media.licdn.com/dms/image/v2/D5603AQGeGFDq3sJ6EA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1700135188525?e=1747872000&v=beta&t=SzZR3iSA9DojOivMjIeAUQ51IW6EUA7uagbYveIJKWI" }, // Added image URL
              { name: "Yash Mali", role: "Filmography Team Member", image: "https://media.licdn.com/dms/image/v2/D4E03AQFDHeGtZSRUdw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723472097881?e=1747872000&v=beta&t=mQV5q1lGN8dYdprASmXd8hQy4KV8kg3miEOZSz_IdPA" }, // Added image URL
              { name: "Shantanu Patil", role: "Filmography Team Member", image: "https://media.licdn.com/dms/image/v2/D5635AQEAUfaB4DsPKw/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1657517008278?e=1742720400&v=beta&t=esko0A5psRwQZs7NtnJJGBTx2rSvQJqYBIAe1JmYQ8s" }, // Added image URL
              { name: "Sanika Korde", role: "Filmography Team Member", image: "https://media.licdn.com/dms/image/v2/D4D03AQG7dCmVzzHR4A/profile-displayphoto-shrink_100_100/B4DZWGeTnOGcAU-/0/1741717847001?e=1747872000&v=beta&t=4RMav78CgsOrXI43W7840sNsr5g3Fne51x2r-bkxB9M" } // Added image URL
            ]
          }
        ]
      },
      {
        name: "Soham Penshanwar",
        role: "Head",
        team: "Finance & Participant Affairs",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQFw1S0uq_CG4Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1693450047482?e=1747872000&v=beta&t=7nxLOuuLzCdCoZXySBJpK5C2HC-DpD91M-iX2M6_MDI",
        leads: [
          {
            name: "Darshan Kedare",
            role: "Finance Team Lead",
            image: "https://media.licdn.com/dms/image/v2/D5635AQFAyc_qGWmp_w/profile-framedphoto-shrink_100_100/B56ZV685vqGQAk-/0/1741524540722?e=1742720400&v=beta&t=evqIHYBIe8KmT7txoh1AQ6iGozpuTMOso1_ONq6-a3o", // Added image URL
            teamMembers: [
              { name: "Om Birla", role: "Finance Team Member", image: "https://media.licdn.com/dms/image/v2/D4D03AQFN9g4ExnHsjg/profile-displayphoto-shrink_100_100/B4DZSZpPiKHIAU-/0/1737744513737?e=1747872000&v=beta&t=VowasvKHQ30B33gj2XK4k_PPNr2-Rah3I5adX6IdkO0" }, // Added image URL
              { name: "Piyush Nashikkar", role: "Finance Team Member", image: "https://media.licdn.com/dms/image/v2/D4D03AQFQpjgon7_rng/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1729513317332?e=1747872000&v=beta&t=F54nemzB4_CXdh5Io3DkJ-4NdK8JCCW1kW1RLDCzZbk" }, // Added image URL
              { name: "Nishant Shelke", role: "Finance Team Member", image: "https://media.licdn.com/dms/image/v2/D5603AQGjC3cd9aQsfg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1711398404761?e=1747872000&v=beta&t=5R8iC4OgtzZcgJY7HOVG4flqPDuM6GKunMscDNMbtns" }, // Added image URL
              { name: "Atharva Jadhav", role: "Finance Team Member", image: "https://media.licdn.com/dms/image/v2/D5603AQHcDHVp5Mh4XA/profile-displayphoto-shrink_100_100/B56ZVnhWGDGsAU-/0/1741198551134?e=1747872000&v=beta&t=pntHjpMS85MYtKXIe_q9H-3uYnd8j-uhBF6Louypcxw" } // Added image URL
            ]
          },
          {
            name: "Manasi Jadhav",
            role: "Participant Affairs Team Lead",
            image: "https://media.licdn.com/dms/image/v2/D4D03AQGzVm7qflVNMg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1697425449903?e=1747872000&v=beta&t=wnnUOOw2XPJOGeej0E-UG7fz1w6dWfBnzs03vNr1mWU", // Added image URL
            teamMembers: [
              { name: "Bhuburv Bhatkar", role: "Participant Affairs Member", image: "https://example.com/images/bhuburv.jpg" }, // Added image URL
              { name: "Radhika Ware", role: "Participant Affairs Member", image: "https://example.com/images/radhika.jpg" }, // Added image URL
              { name: "Akshada Pawar", role: "Participant Affairs Member", image: "https://media.licdn.com/dms/image/v2/D4D03AQERqwqCzfxpTA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1728622732519?e=1747872000&v=beta&t=xvm3K2U04woGurIkP9aoY-ylaoU3XvkaPS_DPcYkVic" }, // Added image URL
              { name: "Shruttika Patil", role: "Participant Affairs Member", image: "https://media.licdn.com/dms/image/v2/D4D03AQGq2klK16ejpQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1730267278827?e=1747872000&v=beta&t=ReZgRuETkvyeqzAJ7NN86mWLSOUK-6wyzTrPVEFtzbQ" }, // Added image URL
              { name: "Pranita Patil", role: "Participant Affairs Member", image: "https://media.licdn.com/dms/image/v2/D4D03AQHHmm1eCH9pIQ/profile-displayphoto-shrink_100_100/B4DZVgXC_.HkAY-/0/1741078414072?e=1747872000&v=beta&t=RjCvMOf26AvXaESgiRPqqLGO6Ruqlys4SkrcZNAfN6o" }, // Added image URL
              { name: "Neha Jadhav", role: "Participant Affairs Member", image: "https://media.licdn.com/dms/image/v2/D5603AQESDyqSypgP5w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1722870628789?e=1747872000&v=beta&t=DMGUVxb8Hj1vkl8FNhKGM3zpF48BVLebKfjNFdE9VAg" } // Added image URL
            ]
          }
        ]
      },
      {
        name: "Suraj Yeola",
        role: "Head",
        team: "Research & Planning",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQFLGk0lr9EmKQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1721838988621?e=1747872000&v=beta&t=MwVZao8QTcL-Q5CbubtEqqr8Lw8G75a-CE6Mt37lznU",
        leads: [
          {
            name: "Oceania Kshetrimayum",
            role: "Research Team Lead",
            image: "https://media.licdn.com/dms/image/v2/D4D03AQEJZCxFQRYAMg/profile-displayphoto-shrink_100_100/B4DZP.yuLnHwAc-/0/1735146533178?e=1747872000&v=beta&t=LMlWMz7hTvUDvlDGiTIkH5BWa2r5EPAwGmOpVoGjB0w",
            teamMembers: [
              { name: "Pranav Prajapati", role: "Research Team Member", image: "https://media.licdn.com/dms/image/v2/D4D03AQHSixGVBanpUg/profile-displayphoto-shrink_100_100/B4DZQicxO0HwAY-/0/1735744756022?e=1747872000&v=beta&t=dCEehkkgLsLW74cKYsYDapD52ni_PwzAhY5YGyHvPHg" },
              { name: "Parnika Patil", role: "Research Team Member", image: "https://media.licdn.com/dms/image/v2/D5603AQHPH0FNDtx-Lw/profile-displayphoto-shrink_100_100/B56ZQBana_G4AU-/0/1735190545209?e=1747872000&v=beta&t=B0TSFdNWs1GGo5z15Tm1PyUYeAwR1RKpP2dcLFf1ffo" },
              { name: "Meghraj Bhavsar", role: "Research Team Member", image: "https://media.licdn.com/dms/image/v2/D4D03AQHRWp39Gs4L_g/profile-displayphoto-shrink_100_100/B4DZPjpPRvG0AY-/0/1734691059846?e=1747872000&v=beta&t=zTrbMrfDzBccm2IEoZ17P9Kh3QdwjvypM2bAceLqyfY" },
              { name: "Atharva Gadekar", role: "Research Team Member", image: "https://media.licdn.com/dms/image/v2/D5603AQGIGgyR9xZp7w/profile-displayphoto-shrink_100_100/B56ZOONd1uHYAU-/0/1733257719498?e=1747872000&v=beta&t=_RyMMAO4PdM8HnUkr2wHqIrcVXa-d6LfECRTDng9tMo" },
              { name: "Shrey Salunke", role: "Research Team Member", image: "https://media.licdn.com/dms/image/v2/D5603AQH9JgJC8rfKQA/profile-displayphoto-shrink_100_100/B56ZPajWAvHoAY-/0/1734538520322?e=1747872000&v=beta&t=X6-_DEDVgnyrf0wgkm7FntamlI2VWU2G8JYJ_tbbdf4" },
              { name: "Rasika Thakur", role: "Research Team Member", image: "https://media.licdn.com/dms/image/v2/D4E03AQF0yarCDpYE1w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1701069179822?e=1747872000&v=beta&t=bkAUMN361E3_achpvzwNxMymmGO-p2Mc5QBghozhYBs" },
              { name: "Varad Joshi", role: "Research Team Member", image: "https://media.licdn.com/dms/image/v2/D5603AQE1yjqWlF05jg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1698493505422?e=1747872000&v=beta&t=rXRSMKWStiljMnok-yFI1RH13oqvnZweeDIZmI9NhGU" }
            ]
          }
        ]
      }
    ]
  }
];




const OrganizingTeam = () => {
  const [expanded, setExpanded] = useState({ head: null, lead: null });

  const toggle = (level, index) => {
    setExpanded(prev => ({
      ...prev,
      [level]: prev[level] === index ? null : index
    }));
  };

  const iconMap = {
    facebook: <FaFacebookF className="hover:text-blue-600" />,
    instagram: <FaInstagram className="hover:text-pink-600" />,
    linkedin: <FaLinkedinIn className="hover:text-blue-400" />
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 ">
      <Nav/>

      <h2 className="text-4xl font-bold text-center mb-12">ORGANIZING TEAM</h2>

      {teamStructure.map((category, catIndex) => (
        <div key={catIndex} className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-6 text-orange-500">{category.category}</h3>
          {category.members.map((head, headIndex) => (
            <div key={headIndex} className="mb-6 border-b border-gray-700">
              <button onClick={() => toggle('head', headIndex)} className="w-full flex justify-between items-center p-4 hover:bg-gray-800 transition-colors">
                <div className="flex items-center space-x-4">
                  <ImageComponent
                    src={head.image}
                    alt={head.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
                  />
                  <div className="text-left">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-xl font-bold">{head.name}</h4>
                      <a
  href={getLinkedInUrl(head.name)}
  target="_blank"
  rel="noopener noreferrer"
  className="text-orange-500 hover:text-orange-400"
>
  <FaLinkedinIn className="w-4 h-4" />
</a>
                    </div>
                    <p className="text-gray-400">{head.role} - {head.team}</p>
                  </div>
                </div>
                {expanded.head === headIndex ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {expanded.head === headIndex && (
                <div className="ml-8 mt-4">
                  {head.leads.map((lead, leadIndex) => (
                    <div key={leadIndex} className="mb-4">
                      <button onClick={() => toggle('lead', leadIndex)} className="w-full flex justify-between items-center p-4 hover:bg-gray-800 transition-colors">
                        <div className="flex items-center space-x-4">
                          <ImageComponent
                            src={lead.image}
                            alt={lead.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
                          />                      <div className="text-left">
                            <div className="flex items-center space-x-2">
                              <h4 className="font-semibold">{lead.name}</h4>
                              <a
  href={getLinkedInUrl(lead.name)}
  target="_blank"
  rel="noopener noreferrer"
  className="text-orange-500 hover:text-orange-400"
>
  <FaLinkedinIn className="w-4 h-4" />
</a>
                            </div>
                            <p className="text-gray-400 text-sm">{lead.role}</p>
                          </div>
                        </div>
                        {expanded.lead === leadIndex ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                      {expanded.lead === leadIndex && (
                        <div className="ml-8 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {lead.teamMembers.map((member, memberIndex) => (
                            <div key={memberIndex} className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                              <ImageComponent
                                src={member.image}
                                alt={member.name}
                                className="w-10 h-10 rounded-full object-cover"
                              />
                              <div>
                                <div className="flex items-center space-x-2">
                                  <h4 className="font-medium">{member.name}</h4>
                                  <a
  href={getLinkedInUrl(member.name)}
  target="_blank"
  rel="noopener noreferrer"
  className="text-orange-500 hover:text-orange-400"
>
  <FaLinkedinIn className="w-4 h-4" />
</a>
                                </div>
                                <p className="text-gray-400 text-sm">{member.role}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default OrganizingTeam;
