import { useEffect, useState } from 'react';

const useFetchHeadings = () => {
  const [headings, setHeadings] = useState([]);

  const getHeadingsFromMain = () => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      const headingsArray = [];
      const headingElements = mainContent.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headingElements.forEach((heading) => {
        headingsArray.push(heading.innerText);
      });
      setHeadings(headingsArray);
    }
  };

  useEffect(() => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      // Create a mutation observer to watch changes in the DOM
      const observer = new MutationObserver(() => {
        // When the content is updated, fetch the headings
        getHeadingsFromMain();
      });

      // Observe changes in the main content (like when markdown is rendered)
      observer.observe(mainContent, {
        childList: true,
        subtree: true,
      });

      // Initial fetch of headings
      getHeadingsFromMain();

      // Clean up the observer when the component unmounts
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return headings;
};

export default useFetchHeadings;
