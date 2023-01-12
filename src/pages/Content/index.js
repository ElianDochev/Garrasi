import { printLine } from './modules/print';

// const appIsOn = true;

// if (appIsOn) {
//   // Get all the elements on the page
//   var elements = document.querySelectorAll('*');

//   // Create the function that will be called on mouseover
//   function showTooltip(event) {
//     // if (event.target.tagName === 'A') {
//     //   console.log('Mouseover event on: ', event.target);
//     // }
//     // const searchResultsContainer = document.querySelector(
//     //   '#searchResultsContainer'
//     // );
//     // if (searchResultsContainer.contains(event.target)) {
//     //   console.log('Mouseover event on Google search result: ', event.target);
//     // }
//     if (
//       event.target.classList.contains('g') ||
//       event.target.classList.contains('r')
//     ) {
//       console.log('Mouseover event on Google search result: ', event.target);
//     }

//     // You can use the event object here to determine the target element, the coordinates of the mouse pointer, etc.
//   }

//   // Loop through each element
//   for (var i = 0; i < elements.length; i++) {
//     // Add an event listener to each element that listens for a mouseover event
//     if (
//       elements[i].classList.contains('g') ||
//       elements[i].classList.contains('r')
//     ) {
//       elements[i].addEventListener('mouseover', showTooltip);
//     }
//   }
//   const observer = new MutationObserver((mutations) => {
//     mutations.forEach((mutation) => {
//       if (mutation.addedNodes && mutation.addedNodes.length) {
//         for (let i = 0; i < mutation.addedNodes.length; i++) {
//           const node = mutation.addedNodes[i];
//           if (node.classList.contains('g') || node.classList.contains('r')) {
//             console.log('Added node: ', node);
//             node.addEventListener('mouseover', showTooltip);
//           }
//         }
//       }
//     });
//   });
//   observer.observe(document.body, { childList: true, subtree: true });
// }

// // import { useEffect } from 'react';

// // function Tooltip() {
// //   const [hover, setHover] = useState(false);
// //   const [target, setTarget] = useState(null);

// //   useEffect(() => {
// //     function handleMouseOver(event) {
// //       setHover(true);
// //       setTarget(event.target);
// //     }
// //     function handleMouseOut() {
// //       setHover(false);
// //     }
// //     document.body.addEventListener('mouseover', handleMouseOver);
// //     document.body.addEventListener('mouseout', handleMouseOut);
// //     return () => {
// //       document.body.removeEventListener('mouseover', handleMouseOver);
// //       document.body.removeEventListener('mouseout', handleMouseOut);
// //     };
// //   }, []);

// //   return hover && target ? (
// //     <div
// //       className="tooltip"
// //       style={{
// //         top: target.getBoundingClientRect().top,
// //         left: target.getBoundingClientRect().left,
// //       }}
// //     >
// //       This is a tooltip
// //     </div>
// //   ) : null;
// // }
// // export default Tooltip;

// const websiteLinks = document.querySelectorAll('.g a');
// for (let i = 0; i < websiteLinks.length; i++) {
//   websiteLinks[i].addEventListener('mouseover', function (event) {
//     console.log(event.target.href);
//   });
// }

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes && mutation.addedNodes.length) {
      for (let i = 0; i < mutation.addedNodes.length; i++) {
        const node = mutation.addedNodes[i];
        if (node.tagName === 'A') {
          node.addEventListener('mouseover', function (event) {
            console.log(event.target.href);
          });
        }
      }
    }
  });
});
observer.observe(document.body, { childList: true, subtree: true });
