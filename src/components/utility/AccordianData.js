import realtime from "../../assets/realtime.gif";
import focus from "../../assets/focus.gif";
import analytics from "../../assets/analytics.webp";
import engagement from "../../assets/engagement.webp";

export const accordianData = [
  {
    header: "Real-time Behavior Tracking",
    content:
      "With the student's consent, webcam analytics track behaviors such as joy, confusion, and sleepiness during lectures. These insights form the basis for personalized learning recommendations.",
    image: realtime,
  },
  {
    header: "Secure Video Processing",
    content:
      "We prioritize student privacy. Videos are converted to a bit format only readable by computers, ensuring a secure learning environment.",
    image: realtime,
  },
  {
    header: "Focused Review",
    content:
      "Personalized reports guide students to parts of lectures where they displayed confusion or distraction, ensuring comprehensive understanding.",
    image: focus,
  },
  {
    header: "Soft Skills Enhancement",
    content:
      "AiTutor isn't just for traditional subjects. Practice introductions for interviews, receive feedback on posture, eye contact, and voice modulation, and fine-tune skills essential for real-world success.",
    image: focus,
  },
  {
    header: "Engagement Analytics",
    content:
      "Understand student engagement down to the minutiae. Which parts of the lecture were captivating? Where did attention wane? These insights enable content adjustments for maximized engagement.",
    image: engagement,
  },
  {
    header: "Course Progress Reports",
    content:
      "At a glance, see how many students enrolled, their progress percentages, and overall course completion rates.",
    image: analytics,
  },
];

//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleAccordionClick = (index) => {
//     if (activeIndex !== index) {
//       setActiveIndex(index);
//     }
//   };

//   return (
//     <div className="mt-10 flex flex-col lg:flex-row gap-6">
//       <div className="w-full lg:w-1/2">
//         {accordianData.map(({ header, content, image }, i) => (
//           <div key={i} className="mb-4">
//             <div
//               className={`cursor-pointer p-4 rounded-md shadow-md transition ${
//                 activeIndex === i
//                   ? "bg-gray-200"
//                   : "bg-gray-100 hover:bg-gray-200"
//               }`}
//               onClick={() => handleAccordionClick(i)}
//             >
//               <h3 className="font-semibold text-lg text-gray-800">{header}</h3>
//             </div>

//             {activeIndex === i && (
//               <div className="bg-white p-4 mt-2 rounded-md shadow-md">
//                 <p className="text-gray-700">{content}</p>

//                 <div className="mt-4 lg:hidden">
//                   <img
//                     src={image}
//                     alt={header}
//                     loading="lazy"
//                     className="w-full h-auto rounded-lg shadow-lg"
//                   />
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       <div className="hidden lg:block w-full lg:w-1/2 bg-white p-2 rounded-lg shadow-md">
//         {activeIndex !== null && (
//           <img
//             src={accordianData[activeIndex].image}
//             alt={accordianData[activeIndex].header}
//             loading="lazy"
//             className="w-full h-auto rounded-lg shadow-lg"
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default AccordionWithImage;
