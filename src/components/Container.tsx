interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="lg:px-[120px] xl:px-[120px] md:px-[72px] sm:px-[20px] xs:px-0">
      {children}
    </div>
  );
};

export default Container;
