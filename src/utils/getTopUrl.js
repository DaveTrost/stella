export const getTopUrl = () => {
  return (window.location !== window.parent.location)
    ? document.referrer
    : document.location.href;
};
