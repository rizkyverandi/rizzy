const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-xl text-copy-secondary leading-9">{children}</p>;
};

export default Paragraph;
