// function showDiamondContent(stageId) {
//   const targetContent = document.getElementById(`diamond-content-${stageId}`);
  
//   // Toggle visibility of the content
//   if (targetContent.classList.contains('active')) {
//     targetContent.classList.add('hidden');
//     targetContent.classList.remove('active');
//   } else {
//     // Hide all other content
//     const allContents = document.querySelectorAll('.diamond-content');
//     allContents.forEach((content) => content.classList.add('hidden'));
//     allContents.forEach((content) => content.classList.remove('active'));
    
//     // Show the selected content
//     targetContent.classList.remove('hidden');
//     targetContent.classList.add('active');
//   }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     // Select the sections
//     const sections = document.querySelectorAll('.top, .final-proposal, .prototype-body');
//     let currentIndex = 0;

//     // Function to handle the scroll behavior
//     function scrollToNextSection() {
//         if (currentIndex < sections.length - 1) {
//             currentIndex++;
//             sections[currentIndex].scrollIntoView({ behavior: 'smooth' });
//         }
//     }

//     // Event listener for scroll
//     window.addEventListener('scroll', () => {
//         // Check if user has scrolled to the end of the current section
//         const currentSection = sections[currentIndex];
//         const sectionBottom = currentSection.offsetTop + currentSection.offsetHeight;

//         // If user has scrolled past current section, move to the next section
//         if (window.scrollY + window.innerHeight > sectionBottom) {
//             scrollToNextSection();
//         }
//     });
// });
