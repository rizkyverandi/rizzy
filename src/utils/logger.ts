function Logger() {}

Logger.logComponent = (componentName: string) => {
  console.log(`${componentName} is rendered`);
};

export default Logger;
