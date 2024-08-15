export const getWindow = () =>
    typeof window === 'undefined' ? undefined : window;
  
  const inBrowser = (fn, defaultReturn) => {
    if (typeof window === 'undefined') return defaultReturn;
    return fn();
  };
  
  export default inBrowser;
  