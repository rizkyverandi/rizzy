function Utils() {}

Utils.logComponent = (componentName: string) => {
  console.log(`${componentName} is rendered`);
};

Utils.isMobile = (userAgent: string) => {
  return /Mobi|Android/i.test(userAgent);
};

Utils.splitChars = (text: string) => {
  return Array.from(text);
};

export default Utils;
